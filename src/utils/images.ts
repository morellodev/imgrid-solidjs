import range from "lodash/range";

export function getResponsiveVariants(
  maxDpi: number,
  baseHeight: number,
  aspectRatio: number,
  seed: number
): string[] {
  if (maxDpi < 1) {
    throw new Error("maxDpi must be greater than 0");
  }

  const width = (baseHeight * aspectRatio) | 0;

  return range(1, maxDpi + 1).map(
    (dpi) =>
      `https://picsum.photos/${dpi * width}/${
        dpi * baseHeight
      }.webp?random=${seed} ${dpi}x`
  );
}
