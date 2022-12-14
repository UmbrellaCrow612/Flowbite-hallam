import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BackgroundImage } from '../components/Home/BackgroundImage'
import { Container } from '../components/Container'

import heroBgImageOne from '../../public/images/hero-1-bg.svg'
import heroBgImageTwo from '../../public/images/hero-2-bg.svg'
import heroBgImageThree from '../../public/images/hero-3-bg.svg'
import heroBgImageFour from '../../public/images/hero-4-bg.svg'
import { Card } from '../components/Card'
import { CardContainer } from '../components/CardContainer'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sheffield Hallam University | Home</title>
        <meta
          name="description"
          content="The official University website, Sheffield Hallam University, Home page. "
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
        {/** ======= Hero 1 ========== */}
        <section className="w-full xl:h-[600px] h-[800px] mt-4 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          {/** grid one */}
          <div className="flex flex-col items-center justify-center gap-4 font-mono xl:gap-7">
            <h2 className="text-4xl font-extrabold tracking-wide xl:text-5xl">
              Clearing {new Date().getFullYear()}
            </h2>
            <h3 className="text-xl font-bold tracking-wide xl:text-2xl">
              Find your place
            </h3>
            <Link href="/">
              <a className="button-86" role="button">
                Find your place
              </a>
            </Link>
          </div>
          {/** grid two */}
          <div className="p-5">
            <BackgroundImage
              imgSrc={heroBgImageOne}
              alt="Man on his phone with space behind him"
            />
          </div>
        </section>

        {/** ======= course search ========== */}
        <section className="h-[300px] flex flex-col gap-7 px-3 mt-4 items-center justify-center">
          <h2 className="text-3xl font-extrabold tracking-wide">
            Course Search
          </h2>
          <input
            type="text"
            placeholder="Search for a course"
            className="w-full max-w-lg px-5 py-5 border border-gray-100 rounded-full shadow-md placeholder:text-sm"
          />
        </section>

        {/** ======= Hero 2 ========== */}

        <section className="h-[600px] mt-4  grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
          {/* Grid 1 */}
          <div className="p-5">
            <BackgroundImage
              imgSrc={heroBgImageTwo}
              alt="Rocket ship in the middle of the night"
            />
          </div>
          {/* Grid 2 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-extrabold tracking-wide">Open days</h2>
            <h3 className="font-bold text-center">
              Join us on campus this autumn to check out our campus, facilities
              and support.
            </h3>
            <Link href="/">
              <a className="relative px-6 py-2 group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Book for autumn
                </span>
              </a>
            </Link>
          </div>
        </section>

        {/* ========= Cards 1 =========== */}
        <section>
          <h2 className="text-2xl font-extrabold tracking-wide text-center md:text-3xl">
            For applicants
          </h2>
          <CardContainer>
            <Card
              body="Our city is scenic, creative and super friendly. You're going to love it"
              imgSrc="/images/applicant-1-bg.jpeg"
              alt="Two people sitting in a coffee shop"
              href=""
              title="Explore Sheffield"
            />
            <Card
              body="Award-winning teaching, world-class facilities and dedicated support"
              imgSrc="/images/applicant-2-bg.jpeg"
              href=""
              title="Why choose us?"
              alt="Person in the library"
            />
            <Card
              body="We'll find you a place to live in your first year guaranteed!"
              imgSrc="/images/applicant-3-bg.jpeg"
              href=""
              title="Accommodation"
              alt="People outside of there dorms"
            />
          </CardContainer>
        </section>

        {/* ========= Hero 3 =========== */}

        <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-[600px] mt-4">
          {/* Grid one */}
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-2xl font-extrabold tracking-wide md:text-3xl">
              Research at Hallam
            </h2>
            <h3 className="max-w-md text-xl md:text-2xl md:max-w-none">
              We bring knowledge to life with innovative, real-world research.
            </h3>
            <Link href="/">
              <a className="button-86" role="button">
                Findings
              </a>
            </Link>
          </div>
          {/* Grid Two */}
          <div className="p-5">
            <BackgroundImage
              imgSrc={heroBgImageThree}
              alt="Research Scientist experimenting"
            />
          </div>
        </section>

        {/* ========= Cards 2 =========== */}
        <section>
          <h2 className="text-2xl font-extrabold tracking-wide text-center md:text-3xl">
            News
          </h2>
          <CardContainer>
            <Card
              body="Our city is scenic, creative and super friendly. You're going to love it"
              imgSrc="/images/applicant-1-bg.jpeg"
              alt=""
              href=""
              title="Explore Sheffield"
            />
            <Card
              body="Award-winning teaching, world-class facilities and dedicated support"
              imgSrc="/images/applicant-2-bg.jpeg"
              href=""
              title="Why choose us?"
              alt=""
            />
            <Card
              body="We'll find you a place to live in your first year guaranteed!"
              imgSrc="/images/applicant-3-bg.jpeg"
              href=""
              title="Accommodation"
              alt=""
            />
          </CardContainer>
        </section>

        {/* ========= Hero 4 About =========== */}

        <section className="mt-3 h-[600px] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          {/* grid 1 */}
          <div className="p-5">
            <BackgroundImage imgSrc={heroBgImageFour} alt="About page" />
          </div>

          {/* grid 2 */}
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl font-extrabold tracking-wide text-center md:text-3xl">
              Read more about Sheffield Hallam on our about page
            </h2>
            <Link href="">
              <a className="button-86">About us</a>
            </Link>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Home
