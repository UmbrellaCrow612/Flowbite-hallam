import Link from 'next/link'
import { Logo } from './Logo'
import { MobileMenuHandler } from './Mobile/MobileMenuHandler'
import { SearchMenuHandler } from './Search/SearchMenuHandler'
import { NavOptions } from './Values/NavOptions'

interface indexProps {}

export const Header: React.FC<indexProps> = () => {
  return (
    <header>
      <nav className="sticky top-0 flex items-center justify-between w-full h-20 px-5 mx-auto border-b shadow-md max-w-screen-2xl border-b-slate-300">
        <Logo />
        {/** Desktop options */}
        <div className='items-center hidden gap-2 p-1 md:flex'>
          {NavOptions.map((Option) => (
            <Link href={`/${Option.href}`} key={Option.title}>
              <a className={`${Option.moreOptions && 'hidden'} border border-gray-200 shadow-md px-3 py-2 rounded-md`}>
                {Option.title}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <SearchMenuHandler />
          <MobileMenuHandler />
        </div>
      </nav>
    </header>
  )
}
