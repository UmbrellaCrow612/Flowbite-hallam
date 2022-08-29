import Image, { StaticImageData } from 'next/image'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ffffff" offset="20%" />
      <stop stop-color="#e3e1e1" offset="50%" />
      <stop stop-color="#ccc8c8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str:string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
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
        objectFit="contain"
        quality={100}
        src={imgSrc}
        alt={alt}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 400))}`}
      />
    </div>
  )
}
