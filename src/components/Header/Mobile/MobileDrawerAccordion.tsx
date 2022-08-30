import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { mobileDrawerState } from '../../../../atoms/mobileDrawerState'

interface MobileDrawerAccordionProps {
  title: string
  _href: string
  hasMoreOptions: boolean
  moreOptions?: Array<{ title: string; href: string }>
}

export const MobileDrawerAccordion: React.FC<MobileDrawerAccordionProps> = ({
  title,
  _href,
  hasMoreOptions,
  moreOptions,
}) => {
  const Router = useRouter()
  const [openAccordion, setOpenAccordion] = useState(false)
  const [openMobileDrawer, setOpenMobileDrawer] =
    useRecoilState(mobileDrawerState)

  const changePage = (_href: string) => {
    const destination = _href.toLocaleLowerCase()
    Router.push(destination)
    setOpenMobileDrawer(!openMobileDrawer)
  }
  return (
    <>
      {hasMoreOptions ? (
        <button
          className="flex items-center justify-between h-16 px-2 border-2 border-black rounded-md shadow-lg"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          <span className="text-base font-bold tracking-wide">{title}</span>
          <MdExpandMore
            className={`text-3xl transition-all ${
              openAccordion ? 'rotate-180' : ''
            }`}
          />
        </button>
      ) : (
        <button
          className="flex items-center justify-between h-16 px-2 border-2 border-black rounded-md shadow-lg"
          onClick={() => changePage(_href)}
        >
          <span className="text-base tracking-wide">{title}</span>
        </button>
      )}

      {/** More options for accordion  */}
      <div
        className={`px-3 transition-all mt-1 ${
          openAccordion ? 'block' : 'hidden'
        } `}
      >
        {moreOptions?.map((Option) => (
          <button
            className="flex items-center justify-between w-full h-16 px-2 mt-3 border-2 border-black rounded-md shadow-lg"
            onClick={() => changePage(Option.href)}
            key={Option.title}
          >
            {Option.title}
          </button>
        ))}
      </div>
    </>
  )
}
