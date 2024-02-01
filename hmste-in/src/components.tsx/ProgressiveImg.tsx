type Props = {
  placeholderSrc: string;
  imgSrc: string;
  width: string;
  height: string;
};

const ProgressiveImg = (props: Props) => {
  return <img {...{ src: props.imgSrc, ...props }} className="image" />;
};
export default ProgressiveImg;
