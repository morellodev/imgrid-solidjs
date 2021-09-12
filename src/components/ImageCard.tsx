import { Component, createSignal } from "solid-js";

type Props = {
  src: string;
  srcSet: string;
};

const ImageCard: Component<Props> = ({ src, srcSet }) => {
  const [imageLoaded, setImageLoaded] = createSignal(false);

  return (
    <div
      class="w-full bg-gray-100 rounded overflow-hidden"
      style={{ "aspect-ratio": 1 }}
    >
      <img
        class="w-full object-cover transition-opacity"
        classList={{
          "opacity-0": !imageLoaded(),
          "opacity-100": imageLoaded(),
        }}
        loading="lazy"
        src={src}
        srcSet={srcSet}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default ImageCard;
