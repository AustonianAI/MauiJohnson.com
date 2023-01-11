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
                Maui Johnson is a highly accomplished and experienced interior
                designer with a passion for creating beautiful and functional
                spaces that exceed client expectations. With over 15 years of
                experience designing award-winning projects in the hospitality
                industry, Maui is a leading expert in her field.
              </p>
              <p>
                Maui is an NCIDQ certified designer, which is a designation that
                demonstrates her commitment to the highest standards of design
                excellence. As the Interior Design Director for a leading
                architectural firm, Maui has a wealth of experience managing
                large-scale projects and leading teams of designers and
                architects.
              </p>
              <p>
                Maui's technical skills include proficiency in Revit, AutoCAD,
                SketchUp, Photoshop, InDesign, Illustrator, Microsoft Office,
                Spexx, and FF&Ez, allowing her to create detailed and accurate
                construction documents that bring her designs to life.
                Additionally, Maui's creative skills include space planning,
                hand rendering, hand sketching, programming, and construction
                documents.
              </p>
              <p>
                Maui's innate ability to understand her client's needs and
                preferences, combined with her technical and creative skills,
                result in the development of unique and practical design
                concepts. Additionally, she is able to communicate her ideas to
                clients and team members in both English and Spanish which helps
                to ensure that the final design is aligned with the client's
                vision.
              </p>
              <p>
                If you're looking for an interior designer who is dedicated to
                creating spaces that are as beautiful as they are functional,
                look no further than Maui Johnson. With her skills, experience,
                and passion for design, Maui is the perfect choice to bring your
                vision to life.
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
