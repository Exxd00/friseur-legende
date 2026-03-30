// ═══════════════════════════════════════════════════════════════
// Image Compression Utility
// Compress images before upload (max 200KB per image)
// ═══════════════════════════════════════════════════════════════

export interface CompressedImage {
  file: File;
  preview: string;
  originalSize: number;
  compressedSize: number;
}

export interface CompressionOptions {
  maxSizeKB?: number;
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
}

const defaultOptions: CompressionOptions = {
  maxSizeKB: 200,
  maxWidth: 800,
  maxHeight: 800,
  quality: 0.7
};

export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<CompressedImage> {
  const opts = { ...defaultOptions, ...options };

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > opts.maxWidth! || height > opts.maxHeight!) {
          const ratio = Math.min(opts.maxWidth! / width, opts.maxHeight! / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }

        // Draw image with white background (for transparent PNGs)
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Start with the specified quality
        let quality = opts.quality!;

        const compress = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Could not compress image"));
                return;
              }

              const compressedSizeKB = blob.size / 1024;

              // If still too large, reduce quality and try again
              if (compressedSizeKB > opts.maxSizeKB! && quality > 0.1) {
                quality -= 0.1;
                compress();
                return;
              }

              // Create the compressed file
              const compressedFile = new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), {
                type: "image/jpeg",
                lastModified: Date.now()
              });

              // Create preview URL
              const preview = URL.createObjectURL(blob);

              resolve({
                file: compressedFile,
                preview,
                originalSize: file.size,
                compressedSize: blob.size
              });
            },
            "image/jpeg",
            quality
          );
        };

        compress();
      };

      img.onerror = () => {
        reject(new Error("Could not load image"));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error("Could not read file"));
    };

    reader.readAsDataURL(file);
  });
}

export async function compressMultipleImages(
  files: FileList | File[],
  options: CompressionOptions = {}
): Promise<CompressedImage[]> {
  const fileArray = Array.from(files);
  const compressed: CompressedImage[] = [];

  for (const file of fileArray) {
    if (file.type.startsWith("image/")) {
      try {
        const result = await compressImage(file, options);
        compressed.push(result);
      } catch (error) {
        console.error(`Error compressing ${file.name}:`, error);
      }
    }
  }

  return compressed;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function revokePreviewUrls(images: CompressedImage[]) {
  for (const img of images) {
    URL.revokeObjectURL(img.preview);
  }
}
