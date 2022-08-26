import Link from 'next/link'

interface SubHeaderButtonProps {
  title: string
  href: string
  hasMoreOptions: boolean
}

export const SubHeaderButton: React.FC<SubHeaderButtonProps> = ({
  title,
  href,
  hasMoreOptions,
}) => {
  return (
    <Link href={`/${href}`}>
      <a
        className={`${
          hasMoreOptions === false && 'hidden'
        } relative  inline-flex items-center justify-center xl:px-4 xl:py-3 px-3 py-2 overflow-hidden font-mono text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-lg group`}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56 group-focus:w-56 group-focus:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">{title}</span>
      </a>
    </Link>
  )
}
