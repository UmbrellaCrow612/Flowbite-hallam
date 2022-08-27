import Image, { StaticImageData } from 'next/image'

interface BackgroundImageProps {
  imgSrc: StaticImageData
  alt: string
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imgSrc,
  alt,
}) => {
  return (
    <div className="relative w-full h-full">
      <Image
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        quality={100}
        src={imgSrc}
        alt={alt}
      />
    </div>
  )
}
