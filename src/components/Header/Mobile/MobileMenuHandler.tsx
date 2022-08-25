import { GiHamburgerMenu } from 'react-icons/gi'
import { useRecoilState } from 'recoil'
import { mobileDrawerState } from '../../../../atoms/mobileDrawerState'
interface MobileMenuHandlerProps {}

export const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = () => {
  const [open, setOpen] = useRecoilState(mobileDrawerState)
  return (
    <button
      aria-label="Open Menu"
      className="flex items-center justify-center p-2 border border-gray-200 shadow-md rounded-md md:hidden"
      onClick={() => setOpen(!open)}
    >
      <GiHamburgerMenu className="text-black text-2xl" />
    </button>
  )
}
