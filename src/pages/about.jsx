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
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
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
              Hello! I'm Maui, a hospitality focused interior designer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello! I'm Maui Johnson, an interior design director for an
                award-winning architectural firm. I was born in Mexico but I
                have called the United States home since I was 12 years old.
              </p>
              <p>
                Throughout my career I have worked on some of the most
                prestigious and high-profile projects in the hospitality and
                gaming industries. I've been fortunate to travel around the
                world and live in amazing places and experience different
                cultures, which I believe has allowed me to better understand
                and appreciate the unique nuances and designs of these
                hospitality projects.
              </p>
              <p>
                My cultural background gives me a unique affinity for Native
                American hotel and casino projects. I truly believe I can bring
                a special point of view to these types of projects as I
                understand the cultural underpinnings of the design process. As
                a designer, I feel that it is our responsibility to empathize
                with and find the best ways to portray the voice of our client's
                heritage.
              </p>
              <p>
                When I'm not working, I am living in Austin, Texas with my
                husband. I'm passionate about local design, exploring the
                different neighborhoods of Austin and everything the city has to
                offer.
              </p>
              <p>
                I'm excited to be part of the design community and continue to
                create wonderful, meaningful projects inspired by the rich
                cultural backgrounds of my clients.
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
