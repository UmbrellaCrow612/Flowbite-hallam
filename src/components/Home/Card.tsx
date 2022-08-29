import Image from 'next/image'
import Link from 'next/link'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

interface CardProps {
  imgSrc: string
  href: string
  title: string
  body: string
  alt: string
}

export const Card: React.FC<CardProps> = ({
  imgSrc,
  href,
  title,
  body,
  alt,
}) => {
  return (
    <Link href={`/${href}`}>
      <a className="w-full max-w-xs pb-10 bg-gray-300 border border-gray-200 shadow-md bg-opacity-20 rounded-xl">
        <article>
          <div className="relative w-full px-1 h-[200px]">
            <Image
              alt={alt}
              src={imgSrc}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(300, 200)
              )}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="shadow-sm rounded-xl"
            />
          </div>
          <h3 className="px-1 py-2 text-xl font-semibold tracking-wide text-center">
            {title}
          </h3>
          <p className="p-1 text-sm font-medium text-center">{body}</p>
        </article>
      </a>
    </Link>
  )
}

/*
 <Image
        src="/images/hero-1-bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt=""
        blurDataURL={rgbDataURL(237, 181, 6)}
        className="h-[100px]"
      />

*/
