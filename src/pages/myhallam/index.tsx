import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '../../components/Card'
import { CardContainer } from '../../components/CardContainer'
import { Container } from '../../components/Container'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Myhallam: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyHallam</title>
        <meta
          name="description"
          content="MyHallam Student sign in and login in, access your courses, submit work and interact with teachers "
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <Container>
        <section className="flex flex-col items-center gap-5 px-4 py-10 mt-4 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-wide text-center md:text-5xl">
            MyHallam
          </h1>
          <p className="text-center">
            MyHallam is your student portal and gives you access to all the
            information you need about Sheffield Hallam, as well as access to
            tools like Blackboard, email, My Student Record and your timetable.
          </p>
          <Link href="">
            <a className="relative px-6 py-3 font-bold text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-black rounded-sm ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 group-focus:translate-y-0 group-focus:translate-x-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-gray-800 rounded-sm ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 group-focus:translate-y-0 group-focus:translate-x-0 mix-blend-screen"></span>
              <span className="relative">Sign in</span>
            </a>
          </Link>
        </section>

        <section className="grid h-[600px] grid-cols-1 grid-rows-2 px-4 py-2 mt-4 md:grid-cols-2 md:grid-rows-1 md:h-[300px]">
          {/** Grid 1 */}
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-xl font-semibold md:text-2xl">
              SPECIALIST SUPPORT
            </h2>
            <h3 className="text-xl">Find a support service</h3>
            <p className="text-base tracking-wide">
              Go straight to specialist help, including funding, skills,
              wellbeing and international support
            </p>
            <LocalButton href="">Find a service</LocalButton>
          </div>
          {/** Grid 2 */}
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-xl font-semibold md:text-2xl">
              GENERAL ENQUIRIES
            </h2>
            <h3 className="text-xl">Contact Hallam Help</h3>
            <p className="text-base tracking-wide">
              Not sure who to speak to? Our help desk team can point you in the
              right direction
            </p>
            <LocalButton href="">Hallam Help</LocalButton>
          </div>
        </section>

        {/** ======= cards 1 ========= */}
        <section className="px-3 py-4 mt-4">
          <h2 className="p-3 text-3xl font-extrabold tracking-wide text-center md:text-4xl">
            Discover university life
          </h2>
          <div className="flex flex-wrap items-center w-full gap-4 p-1 justify-evenly">
            <Card
              title="Explore your city"
              body="Discover stunning green spaces and city hangouts"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="Our campuses"
              body="Find out where to go and how to get there"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="Choose your squad"
              body="Join a society, and meet people who love what you love"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="Students' Union"
              body="Get academic support, volunteer and see social events"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="Sport and fitness"
              body="Get active, join Team Hallam and make friends"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="Join the gym"
              body="Sign up to Hallam Active and make use of our gyms"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
          </div>
        </section>

        {/** ======= cards 2 ========= */}
        <section className="px-3 py-4 mt-4">
          <h2 className="p-3 text-3xl font-extrabold tracking-wide text-center md:text-4xl">
            Teaching and learning
          </h2>
          <CardContainer>
            <Card
              title="Study skills"
              body="Access My Student Record, book a PC and get assessment support"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="IT and library"
              body="Find study spaces, borrow books and equipment and print work"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
            <Card
              title="Access Blackboard"
              body="Find course timetables, modules, academic updates, reading lists and more"
              alt=""
              imgSrc="/images/applicant-1-bg.jpeg"
              href=""
            />
          </CardContainer>
        </section>

        {/* Helper Links */}

        <section className="flex flex-col items-center justify-center gap-5 px-3 py-4 mt-4">
          {LocalHelperLinks.map((Option) => (
            <div className="flex flex-col items-center w-full gap-2" key={Option.title}>
              <h2 className="text-2xl font-extrabold tracking-wide md:text-3xl">
                {Option.title}
              </h2>
              <div className='flex flex-wrap gap-3 justify-evenly'>
                {Option.subLinks.map((Option) => (
                  <LocalButton href={`${Option.href}`} key={Option.title}>
                    {Option.title}
                  </LocalButton>
                ))}
              </div>
            </div>
          ))}
        </section>
      </Container>
    </>
  )
}
export default Myhallam

interface Props {
  children: string
  href: string
}

const LocalButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={`/${href}`}>
      <a className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <AiOutlineArrowRight className="w-5 h-5 text-green-400" />
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <AiOutlineArrowRight className="w-5 h-5 text-green-400" />
        </span>
        <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">
          {children}
        </span>
      </a>
    </Link>
  )
}

const LocalHelperLinks: {
  title: string
  subLinks: Array<{ title: string; href: string }>
}[] = [
  {
    title: 'Help in an emergency',
    subLinks: [
      {
        title: 'Campus security',
        href: '',
      },
      {
        title: 'Report a serious incident',
        href: '',
      },
      {
        title: 'Urgent wellbeing support',
        href: '',
      },
    ],
  },
  {
    title: 'Popular queries',
    subLinks: [
      {
        title: 'The Student Handbook',
        href: '',
      },
      {
        title: 'Covid-19 student guidance',
        href: '',
      },
      {
        title: 'Academic calendar',
        href: '',
      },
      {
        title: 'How your undergraduate degree is calculated',
        href: '',
      },
      {
        title: 'Understanding your results',
        href: '',
      },
      {
        title: 'Assessment and exam information',
        href: '',
      },
      {
        title: 'extension for submission deadline (RESD)',
        href: '',
      },
      {
        title: 'Industrial Action',
        href: '',
      },
    ],
  },
  {
    title: 'Student voice',
    subLinks: [
      {
        title: 'Union Voice - Share Your Experience',
        href: '',
      },
      {
        title: 'Help improve your course with Student Reps',
        href: '',
      },
      {
        title: 'Help us improve your student experience',
        href: '',
      },
      {
        title: 'Book a Listening Room',
        href: '',
      },
      {
        title: 'Read our Hallam Insiders blogs',
        href: '',
      },
    ],
  },
]
