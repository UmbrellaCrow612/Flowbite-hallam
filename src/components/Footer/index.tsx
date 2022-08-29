import { CopyRight } from './CopyRight'
import { FooterIcon } from './FooterIcons'

interface indexProps {}

export const Footer: React.FC<indexProps> = () => {
  return (
    <footer>
      <FooterIcon />
      <CopyRight />
    </footer>
  )
}
