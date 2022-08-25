import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '../../../public/images/logo.png'
interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <a className="w-24 h-14 flex items-center justify-center rounded-md border border-gray-100 shadow-md relative">
        <Image
          src={LogoImage}
          layout="fill"
          objectFit="cover"
          alt="Purple Sheffield Hallam University Logo"
          quality={100}
          className="w-24 h-14 rounded-md absolute top-0 left-0"
          placeholder="blur"
        />
      </a>
    </Link>
  )
}
