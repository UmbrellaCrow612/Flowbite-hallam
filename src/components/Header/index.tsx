import { Logo } from './Logo'
import { MobileMenuHandler } from './Mobile/MobileMenuHandler'
import { SearchMenuHandler } from './Search/SearchMenuHandler'

interface indexProps {}

export const Header: React.FC<indexProps> = () => {
  return (
    <header>
      <nav className="sticky top-0 flex items-center justify-between w-full h-20 px-5 mx-auto border-b shadow-md max-w-screen-2xl border-b-slate-300">
        <Logo />
        <div className="flex items-center gap-3">
          <SearchMenuHandler />
          <MobileMenuHandler />
        </div>
      </nav>
    </header>
  )
}
