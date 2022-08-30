import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
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
        <section className="flex flex-col items-center gap-5 px-4 py-2 mt-4">
          <h1 className="text-4xl font-extrabold tracking-wide text-center md:text-5xl">
            MyHallam
          </h1>
          <p className="text-center">
            MyHallam is your student portal and gives you access to all the
            information you need about Sheffield Hallam, as well as access to
            tools like Blackboard, email, My Student Record and your timetable.
          </p>
          <Link href="">
            <a className="button-86">Sign in</a>
          </Link>
        </section>
      </Container>
    </>
  )
}
export default Myhallam

/*


*/
