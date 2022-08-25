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
          className="border border-gray-200 rounded-md px-2 shadow-md h-16 flex items-center justify-between"
          onClick={() => setOpen(!open)}
        >
          <h2 className="font-bold tracking-wide text-xl">{title}</h2>
          <MdExpandMore
            className={`text-3xl transition-all ${open ? 'rotate-180' : ''}`}
          />
        </button>
      )}
      {open && (
        <div className="mt-1 px-3">
          {moreOptions?.map((Option) => (
            <Link href={`/${Option.href}`} key={Option.title}>
              <a
                className="border w-full border-gray-200 rounded-md px-2 shadow-md h-16 flex items-center justify-between"
                onClick={() => setOpen(!open)}
                key={Option.title}
              >
                {Option.title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
