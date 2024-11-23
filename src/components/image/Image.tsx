interface ImgProps {
  className?: string;
  src: string;
  width: number;
  height: number;
}

const Image = ({ className, src, width, height }: ImgProps) => {
  return (
    <>
      <img
        src={src}
        alt="logo"
        className={className}
        width={width}
        height={height}
      />
    </>
  );
};

export default Image;
