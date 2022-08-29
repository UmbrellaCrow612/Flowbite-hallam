import { IconType } from 'react-icons/lib'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import Link from 'next/link'
interface FooterIconProps {}

export const FooterIcon: React.FC<FooterIconProps> = () => {
  return (
    <div className="flex items-center justify-center gap-3 p-3">
      {Icons.map((Option) => (
        <Link href={`${Option.href}`} key={Option.href}>
          <a className="relative flex items-center justify-center p-1">
            <Option.Icon className="text-3xl" />
            <span className="sr-only">{Option.title}</span>
          </a>
        </Link>
      ))}
    </div>
  )
}

const Icons: {
  Icon: IconType
  title: string
  href: string
}[] = [
  {
    Icon: BsTwitter,
    title: 'Twitter',
    href: '',
  },
  {
    Icon: BsFacebook,
    title: 'Facebook',
    href: '',
  },
  {
    Icon: BsInstagram,
    title: 'Instagram',
    href: '',
  },
  {
    Icon: BsYoutube,
    title: 'Youtube',
    href: '',
  },
]
