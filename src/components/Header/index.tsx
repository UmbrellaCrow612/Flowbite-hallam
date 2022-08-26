import Link from 'next/link'
import { HeaderButton } from './HeaderButton'
import { Logo } from './Logo'
import { MobileMenuHandler } from './Mobile/MobileMenuHandler'
import { SearchMenuHandler } from './Search/SearchMenuHandler'
import { SubHeader } from './SubHeader'
import { NavOptions } from './Values/NavOptions'

interface indexProps {}

export const Header: React.FC<indexProps> = () => {
  return (
    <header>
      <nav className="sticky top-0 flex items-center justify-between w-full h-20 px-5 mx-auto max-w-screen-2xl ">
        <Logo />
        {/** Desktop options */}
        <div className="items-center hidden gap-2 p-1 md:flex">
          {NavOptions.map((Option) => (
            <HeaderButton
              title={Option.title}
              hasMoreOptions={Option.hasMoreOptions}
              href={Option.href}
              key={Option.title}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <SearchMenuHandler />
          <MobileMenuHandler />
        </div>
      </nav>
      <SubHeader />
    </header>
  )
}
