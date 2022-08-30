import { CopyRight } from './CopyRight'
import { FooterIcon } from './FooterIcons'
import { FooterLinks } from './FooterLinks'
import { Logo } from './Logo'

interface indexProps {}

export const Footer: React.FC<indexProps> = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl">
      <Logo />
      <FooterLinks />
      <FooterIcon />
      <CopyRight />
    </footer>
  )
}
