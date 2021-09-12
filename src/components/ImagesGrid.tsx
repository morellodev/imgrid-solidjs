import { Component, Index } from "solid-js";

import ImageCard from "./ImageCard";

type Props = {
  count: number;
};

const ImagesGrid: Component<Props> = ({ count }) => {
  return (
    <div class="grid gap-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <Index each={[...Array(count)]}>
        {(_, index) => (
          <ImageCard
            src={`https://picsum.photos/480/480.webp?random=${index}`}
            srcSet={`
              https://picsum.photos/960/960.webp?random=${index} 4x,
              https://picsum.photos/720/720.webp?random=${index} 3x,
              https://picsum.photos/480/480.webp?random=${index} 2x,
              https://picsum.photos/240/240.webp?random=${index} 1x
            `}
          />
        )}
      </Index>
    </div>
  );
};

export default ImagesGrid;
