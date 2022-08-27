import Link from 'next/link'
import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

interface MobileDrawerAccordionProps {
  title: string
  href: string
  hasMoreOptions: boolean
  moreOptions?: Array<{ title: string; href: string }>
}

export const MobileDrawerAccordion: React.FC<MobileDrawerAccordionProps> = ({
  title,
  href,
  hasMoreOptions,
  moreOptions,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {hasMoreOptions === true && (
        <button
          className="flex items-center justify-between h-16 px-2 border-2 border-black rounded-md shadow-lg"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-base font-bold tracking-wide">{title}</h2>
          <MdExpandMore
            className={`text-3xl transition-all ${open ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      {/** More options scroll down */}
      <div className={`px-3 transition-all mt-1 ${open ? 'block' : 'hidden'} `}>
        {moreOptions?.map((Option) => (
          <Link href={`/${Option.href}`} key={Option.title}>
            <a
              className="flex items-center justify-between h-16 px-2 mt-3 border-2 border-black rounded-md shadow-lg"
              onClick={() => setOpen(!open)}
              key={Option.title}
            >
              {Option.title}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}
