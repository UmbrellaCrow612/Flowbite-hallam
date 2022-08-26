import { GiHamburgerMenu } from 'react-icons/gi'
import { useRecoilState } from 'recoil'
import { mobileDrawerState } from '../../../../atoms/mobileDrawerState'
import { AiOutlineClose } from 'react-icons/ai'
interface MobileMenuHandlerProps {}

export const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = () => {
  const [open, setOpen] = useRecoilState(mobileDrawerState)
  return (
    <button
      aria-label="Open Menu"
      className="relative inline-block px-4 py-2 font-medium group md:hidden"
      onClick={() => setOpen(!open)}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 group-focus:-translate-x-0 group-focus:-translate-y-0 "></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black group-focus:bg-black"></span>
      <span className="relative text-black group-hover:text-white group-focus:text-white">
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </span>
    </button>
  )
}

/*
<a href="#_" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white">Button Text</span>
</a>

*/
