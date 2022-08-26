import { BiSearchAlt2 } from 'react-icons/bi'
import { useRecoilState } from 'recoil'
import { searchModalState } from '../../../../atoms/searchModalState'

interface SearchMenuHandlerProps {}

export const SearchMenuHandler: React.FC<SearchMenuHandlerProps> = () => {
  const [open, setOpen] = useRecoilState(searchModalState)
  return (
    <button
      aria-label="Open Search"
      className="flex items-center justify-center p-2 border border-gray-200 rounded-md shadow-md"
      onClick={() => setOpen(!open)}
    >
      <BiSearchAlt2 className="text-2xl text-black" />
    </button>
  )
}
