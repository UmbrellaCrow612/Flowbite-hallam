import { useRecoilState } from "recoil"
import { searchModalState } from "../../../atoms/searchModalState"

interface SearchModalProps {}

export const SearchModal: React.FC<SearchModalProps> = () => {
  const [open,setOpen] = useRecoilState(searchModalState)
  return (
    <div
      className={`fixed top-0  w-full h-full ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div className="z-20 w-full h-20 px-4 py-4 bg-white">
        <input type="text" className="w-full h-full px-2 bg-gray-100 border border-gray-300 rounded-sm shadow-md" placeholder="Search the website"/>
      </div>
      <div className="z-10 w-full h-full bg-black bg-opacity-20" onClick={() => setOpen(!open)} />
    </div>
  )
}
