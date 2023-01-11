/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Meet Maui Johnson - NCIDQ Certified Interior Designer</title>
        <meta
          name="description"
          content="Meet Maui Johnson - NCIDQ Certified Interior Designer"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Meet Maui Johnson - NCIDQ Certified Interior Designer
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Meet Maui Johnson, an experienced and skilled interior designer
                with over 15 years of experience in the hospitality industry.
                Based out of Austin, Texas, Maui has worked on a diverse range
                of projects throughout the United States, including casinos,
                hotels, restaurants, and more.
              </p>
              <p>
                With a passion for sustainable and eco-friendly design,
                technology, and cultural sensitivity, Maui's designs reflect her
                desire to create spaces that not only look beautiful but are
                also meaningful, authentic, and respectful of diverse cultural
                heritage. Her portfolio includes a variety of notable projects
                such as Chicken Ranch Casino Resort in Jamestown, CA, the Hard
                Rock Hotel and Casino Tulsa in Catoosa, OK, and the Dakota Magic
                Casino in Sisseton, ND.
              </p>
              <p>
                Maui's expertise in the hospitality design field is not just
                limited to her professional experience. She has a deep
                understanding and knowledge of ancient Mesoamerican architecture
                and culture, which has helped her to bring a new level of
                authenticity and cultural sensitivity to her work when designing
                for Native American tribes.
              </p>
              <p>
                With a NCIDQ certification, a wealth of technical skills
                including Revit, AutoCAD, SketchUp, Photoshop, InDesign,
                Illustrator, Spexx, and FF&Ez. She also has an array of creative
                skills such as Space Planning, Hand Rendering, Hand Sketching,
                Programming, Construction Documents and she speaks both English
                and Spanish.
              </p>
              <p>
                Maui Johnson is dedicated to creating spaces that are not only
                beautiful but also meaningful and authentic, and her portfolio
                speaks for itself. She is committed to working with her clients
                to bring their vision to life and exceed their expectations.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/mauijohnson/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/maui-johnson-designer/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:Hello@MauiJohnson.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Hello@MauiJohnson.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
