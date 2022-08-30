import Image from 'next/image'
import Link from 'next/link'

interface LogoSectionProps {}

export const Logo: React.FC<LogoSectionProps> = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <Link href="/">
        <a>
          <Image
            src="/images/Logo-2.png"
            width={150}
            height={100}
            alt="Sheffield Hallam University"
            className="rounded-md shadow-md"
          />
        </a>
      </Link>
    </div>
  )
}
