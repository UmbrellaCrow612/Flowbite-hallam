import Link from 'next/link'

interface FooterLinksProps {}

export const FooterLinks: React.FC<FooterLinksProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 md:flex-row">
      {LinkOptions.map((Option) => (
        <div
          className="flex flex-col items-center justify-center gap-3 px-4 py-2 text-center"
          key={Option.title}
        >
          <h2 className="text-xl font-extrabold">{Option.title}</h2>
          {Option.subLinks.map((Option) => (
            <Link href={`/${Option.href}`} key={Option.title}>
              <a>{Option.title}</a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

const LinkOptions: {
  title: string
  href: string
  subLinks: Array<{ title: string; href: string }>
}[] = [
  {
    title: 'Courses and study',
    href: '',
    subLinks: [
      {
        title: 'Undergraduate courses',
        href: '',
      },
      {
        title: 'Postgraduate courses',
        href: '',
      },
      {
        title: 'International students',
        href: '',
      },
      {
        title: 'How to apply',
        href: '',
      },
      {
        title: 'Accommodation',
        href: '',
      },
      {
        title: 'Fees and funding',
        href: '',
      },
    ],
  },
  {
    title: 'About',
    href: '',
    subLinks: [
      {
        title: 'Undergraduate courses',
        href: '',
      },
      {
        title: 'Postgraduate courses',
        href: '',
      },
      {
        title: 'International students',
        href: '',
      },
      {
        title: 'How to apply',
        href: '',
      },
      {
        title: 'Accommodation',
        href: '',
      },
      {
        title: 'Fees and funding',
        href: '',
      },
    ],
  },
  {
    title: 'Legal information',
    href: '',
    subLinks: [
      {
        title: 'Undergraduate courses',
        href: '',
      },
      {
        title: 'Postgraduate courses',
        href: '',
      },
      {
        title: 'International students',
        href: '',
      },
      {
        title: 'How to apply',
        href: '',
      },
      {
        title: 'Accommodation',
        href: '',
      },
      {
        title: 'Fees and funding',
        href: '',
      },
    ],
  },
]

/*






*/
