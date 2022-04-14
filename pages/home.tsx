import Image from 'next/image'
import { Fragment, useState } from 'react'
import { FadeInView, FadeInY } from '../components/animated/FadeInView'
import { NavBar } from '../components/Nav'
import {
  NewspaperIcon,
  PaperClipIcon,
  MailIcon,
  ArrowDownIcon,
} from '@heroicons/react/solid'
import { RESUME_URL } from '../utils/resources'
import Link from 'next/link'

const page2 = (
  <FadeInY>
    <Fragment>
      <h2>Page 2</h2>
    </Fragment>
  </FadeInY>
)

const page1 = (
  <Fragment>
    <div className=" full relative h-44 w-44 overflow-hidden rounded-full shadow-md shadow-gray-900">
      <Image src="/profile.jpg" alt="Profile Image" layout="fill" />
    </div>
    <h1>
      Junjie <span className="italic"> (Johnson) </span> Lin
    </h1>
    <p className="tracking-[.75rem]">🇭🇰 🇿🇦 🇨🇳</p>
    <p className="tracking-widest text-slate-600 dark:text-slate-200">
      Developer | Tech..no Funk | bruh
    </p>
    <div className="vstack container max-w-2xl px-4">
      <p className="text-justify font-light tracking-widest ">
        Hi! Hi! I go by Johnson! Im a African-born Chinese curious about Tech
        📺, Cloud ☁️ and DevOps 🛠 . Im currently work in the Tech Industry as a{' '}
        <span className="italic">Tech Consultant @IBM </span>👨🏻‍
      </p>
    </div>
  </Fragment>
)

const Home = () => {
  const DownloadResume = () => {
    var anchor = document.createElement('a')
    anchor.href = RESUME_URL
    anchor.target = '_blank'
    anchor.download = 'JUNJIE_RESUME'
    anchor.click()
  }

  return (
    <Fragment>
      <div className=" mx-auto  mt-20 grid   grid-cols-1 md:container md:p-0 lg:mt-0  lg:max-w-5xl  lg:grid-cols-2">
        <div className=" relative h-52 w-52 justify-self-center  overflow-hidden rounded-full lg:h-96  lg:w-full lg:rounded-none ">
          <Image
            priority
            src="/profile.jpg"
            alt="Profile Image"
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="vstack justify-between space-y-4 p-4 md:py-0 md:px-8">
          <h1>
            Junjie <span className="italic"> (Johnson) </span> Lin
          </h1>
          <p className="tracking-[.75rem]">🇭🇰 🇿🇦 🇨🇳</p>
          <p className="tracking-widest text-slate-600 dark:text-slate-200">
            Developer | Tech..no Funk | bruh
          </p>

          <p className="text-justify font-light tracking-widest ">
            Hi! Hi! I go by Johnson! Im a African-born Chinese curious about
            Tech 📺, Cloud ☁️ and DevOps 🛠 . Im currently work in the Tech
            Industry as a <span className="italic">Tech Consultant @IBM </span>
            👨🏻‍
          </p>
          <div className="hstack justify-between">
            <button className="button" onClick={DownloadResume}>
              <PaperClipIcon className="icon" />
              <p>Resume</p>
            </button>
            <a
              href="https://blog.modiejun.com"
              target="_blank"
              className="button"
            >
              <NewspaperIcon className="icon" />
              <p>Blog</p>
            </a>
            <a href="mailto:modiejun@modiejun.com" className="button">
              <MailIcon className="icon" />
              <p>Email</p>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
