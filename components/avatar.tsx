import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};
const ImageAvatar = ({ src, alt, size = 32, ...props }: AvatarProps) => {
  return (
        <Image
          src={src}
          alt={alt}
          height={size}
          width={size}
          className="h-fit w-fit rounded-full"
          {...props}
        />
  );
};

export { ImageAvatar };
