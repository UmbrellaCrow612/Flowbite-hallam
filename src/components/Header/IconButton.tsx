interface IconButtonProps {
  children: React.ReactNode
}

export const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return (
    <div className="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
      {children}
    </div>
  )
}
