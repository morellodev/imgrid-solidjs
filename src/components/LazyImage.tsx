import { Component, createSignal, JSX } from "solid-js";

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
  srcSet?: string;
  style?: JSX.CSSProperties;
};

const LazyImage: Component<Props> = (props) => {
  const [imageLoaded, setImageLoaded] = createSignal(false);

  return (
    <div
      class="bg-gray-100 rounded overflow-hidden"
      classList={{ "animate-pulse": !imageLoaded() }}
      style={props.style}
    >
      <img
        alt={props.alt}
        class="w-full object-cover transition-opacity"
        classList={{
          "opacity-0": !imageLoaded(),
          "opacity-100": imageLoaded(),
        }}
        loading="lazy"
        src={props.src}
        srcSet={props.srcSet}
        width={props.width}
        height={props.height}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
