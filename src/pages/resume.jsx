/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Maui Johnson</title>
        <meta name="description" content="Resume | Maui Johnson" />
      </Head>
      <SimpleLayout
        title="Resume"
        intro="Maui Johnson's update to date resume available for download."
      >
        <div className="flex w-full justify-center">
          <div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-20">
            {/* First Column */}
            <div className="flex flex-col items-center space-y-4">
              <a
                href="/Interior Designer - Maui Johnson Resume.pdf"
                download="Interior Designer - Maui Johnson Resume.pdf"
                className="h-auto w-64"
              >
                <Image
                  src="/graphical-resume-thumbnail.jpg"
                  alt="Resume thumbnail"
                  width={256}
                  height={328}
                  className="rounded-lg shadow-lg"
                />
              </a>
              <a
                href="/Interior Designer - Maui Johnson Resume.pdf"
                download="Interior Designer - Maui Johnson Resume.pdf"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
