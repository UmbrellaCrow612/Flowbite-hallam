import { BiSearchAlt2 } from 'react-icons/bi'
import { useRecoilState } from 'recoil'
import { searchModalState } from '../../../../atoms/searchModalState'

interface SearchMenuHandlerProps {}

export const SearchMenuHandler: React.FC<SearchMenuHandlerProps> = () => {
  const [open, setOpen] = useRecoilState(searchModalState)
  return (
    <button
      aria-label="Open Search"
      className="relative inline-block px-4 py-2 font-medium group "
      onClick={() => setOpen(!open)}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 group-focus:-translate-x-0 group-focus:-translate-y-0 "></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black group-focus:bg-black"></span>
      <span className="relative text-black group-hover:text-white group-focus:text-white">
        <BiSearchAlt2 />
      </span>
    </button>
  )
}
