import { useEffect, useState } from "react";

type Props = {
  placeholderSrc: string;
  imgSrc: string;
  width: string;
  height: string;
};

const ProgressiveImg = (props: Props) => {
  const [imgState, setImgState] = useState(
    props.placeholderSrc || props.imgSrc
  );

  useEffect(() => {
    const img = new Image();
    img.src = props.imgSrc;
    img.onload = () => {
      setImgState(props.imgSrc);
    };
  }, [props.imgSrc]);

  const customClass =
    props.placeholderSrc && props.imgSrc === props.placeholderSrc
      ? "imgLoading"
      : "imgLoaded";
  return <img {...{ src: imgState, ...props }} className={customClass} />;
};
export default ProgressiveImg;
