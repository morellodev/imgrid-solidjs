import { Component, createMemo, Index } from "solid-js";
import { getResponsiveVariants } from "../utils/images";
import LazyImage from "./LazyImage";

type Props = {
  aspectRatio: number;
  count: number;
};

const ImagesGrid: Component<Props> = (props) => {
  const baseImageHeight = 240;

  return (
    <div class="grid gap-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <Index each={[...Array(props.count)]}>
        {(_, index) => {
          const responsiveVariants = createMemo(() =>
            getResponsiveVariants(4, baseImageHeight, props.aspectRatio, index)
          );

          return (
            <LazyImage
              alt={`Image #${index}`}
              src={responsiveVariants()[0]}
              srcSet={responsiveVariants().join(", ")}
              width={(baseImageHeight * props.aspectRatio) | 0}
              height={baseImageHeight}
              style={{ "aspect-ratio": props.aspectRatio }}
            />
          );
        }}
      </Index>
    </div>
  );
};

export default ImagesGrid;
