import { GiHamburgerMenu } from 'react-icons/gi'
import { useRecoilState } from 'recoil'
import { mobileDrawerState } from '../../../../atoms/mobileDrawerState'
import { GrFormClose } from 'react-icons/gr'
interface MobileMenuHandlerProps {}

export const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = () => {
  const [open, setOpen] = useRecoilState(mobileDrawerState)
  return (
    <button
      aria-label="Open Menu"
      className="flex items-center justify-center p-2 border border-gray-200 rounded-md shadow-md md:hidden"
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <GrFormClose className="text-2xl text-black" />
      ) : (
        <GiHamburgerMenu className="text-2xl text-black" />
      )}
    </button>
  )
}
