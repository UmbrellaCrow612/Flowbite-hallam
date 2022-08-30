interface CardContainerProps {
  children: React.ReactNode
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center w-full gap-4 p-1 justify-evenly">
      {children}
    </div>
  )
}
