import { Logo } from './Logo'
import { MobileMenuHandler } from './Mobile/MobileMenuHandler'

interface indexProps {}

export const Header: React.FC<indexProps> = () => {
  return (
    <header>
      <nav className="w-full max-w-screen-2xl mx-auto px-5 sticky top-0 h-20 flex items-center justify-between border-b shadow-md border-b-slate-300">
        <Logo />
        <MobileMenuHandler />
      </nav>
    </header>
  )
}
