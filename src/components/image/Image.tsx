const Image = ({ className, src, width, height }: ImageProps) => {
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
