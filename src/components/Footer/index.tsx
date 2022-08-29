import { CopyRight } from './CopyRight'
import { FooterIcon } from './FooterIcons'
import { FooterLinks } from './FooterLinks'

interface indexProps {}

export const Footer: React.FC<indexProps> = () => {
  return (
    <footer>
      <FooterLinks />
      <FooterIcon />
      <CopyRight />
    </footer>
  )
}
