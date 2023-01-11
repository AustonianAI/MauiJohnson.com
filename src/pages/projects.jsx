/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRestaurant from '@/images/logos/restaurant.svg'
import logoCasino from '@/images/logos/casino.svg'
import logoHotel from '@/images/logos/hotel.svg'
import logoCommunityCenter from '@/images/logos/community-center.svg'
import logoRenovation from '@/images/logos/renovation.svg'

const projects = [
  {
    name: 'Chicken Ranch Casino Resort',
    description: 'Casino - Jamestown, CA',
    location: 'Jamestown, CA',
    logo: logoCasino,
  },
  {
    name: 'Hard Rock Hotel and Casino Tulsa - Suite Tower Renovation',
    description: 'Hotel and Casino Renovation - Catoosa, OK',
    location: 'Catoosa, OK',
    logo: logoRenovation,
  },
  {
    name: 'Cherokee Hotel & Casino West Siloam Springs - Hotel Renovation',
    description: 'Hotel Renovation - West Siloam Springs, OK',
    location: 'West Siloam Springs, OK',
    logo: logoRenovation,
  },
  {
    name: 'Lucky Star Casino & Hotel',
    description: 'Casino and Hotel - Watonga, OK',
    location: 'Watonga, OK',
    logo: logoCasino,
  },
  {
    name: 'Muckleshoot Casino',
    description: 'Casino - Auburn, WA',
    location: 'Auburn, WA',
    logo: logoCasino,
  },
  {
    name: 'Courtyard by Marriott',
    description: 'Hotel - Petaluma, CA',
    location: 'Petaluma, CA',
    logo: logoHotel,
  },
  {
    name: 'Cahuilla Casino Hotel',
    description: 'Casino and Hotel - Anza, CA',
    location: 'Anza, CA',
    logo: logoCasino,
  },
  {
    name: 'Dakota Magic Casino Masterplan and Expansion',
    description: 'Casino Renovation - Sisseton, ND',
    location: 'Sisseton, ND',
    logo: logoRenovation,
  },
  {
    name: 'Mystic Lake Casino Hotel – Hotel and Conference Center Addition',
    description: 'Hotel and Conference Center Renovation - Prior Lake, MN',
    location: 'Prior Lake, MN',
    logo: logoRenovation,
  },
  {
    name: 'Chinook Winds Casino Renovation',
    description: 'Casino Renovation - Lincoln City, OR',
    location: 'Lincoln City, OR',
    logo: logoRenovation,
  },
  {
    name: 'Rincon Tribal Administration Center',
    description: 'Renovation - Valley Center, CA',
    location: 'Valley Center, CA',
    logo: logoRenovation,
  },
  {
    name: 'SpringHill Suites by Marriott',
    description: 'Hotel - Truckee, CA',
    location: 'Truckee, CA',
    logo: logoHotel,
  },
  {
    name: 'Halcyon Hotel Cherry Creek',
    description: 'Hotel - Denver, CO',
    location: 'Denver, CO',
    logo: logoHotel,
  },
  {
    name: 'SpringHill Suites',
    description: 'Hotel - Fort Worth, TX',
    location: 'Fort Worth, TX',
    logo: logoHotel,
  },
  {
    name: 'Embassy Suites',
    description: 'Hotel - Boulder, CO',
    location: 'Boulder, CO',
    logo: logoHotel,
  },
  {
    name: 'Hilton Garden Inn',
    description: 'Hotel - Boulder, CO',
    location: 'Boulder, CO',
    logo: logoHotel,
  },
  {
    name: 'Hilton Garden Inn LoDo',
    description: 'Hotel - Denver, CO',
    location: 'Denver, CO',
    logo: logoHotel,
  },
  {
    name: 'Magnolia Hotel',
    description: 'Hotel - Denver, CO',
    location: 'Denver, CO',
    logo: logoHotel,
  },
  {
    name: 'Snooze at Union Station',
    description: 'Restaurant - Denver, CO',
    location: 'Denver, CO',
    logo: logoRestaurant,
  },
  {
    name: 'Slotted Spoon',
    description: 'Restaurant - Denver, CO',
    location: 'Denver, CO',
    logo: logoRestaurant,
  },
  {
    name: 'TAG Restaurant',
    description: 'Restaurant - Denver, CO',
    location: 'Denver, CO',
    logo: logoRestaurant,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>
          Designing for Success: A Look at Maui Johnson's Impressive Project
          Portfolio
        </title>
        <meta
          name="description"
          content="Designing for Success: A Look at Maui Johnson's Impressive Project Portfolio"
        />
      </Head>
      <SimpleLayout
        title="Designing for Success: A Look at Maui Johnson's Impressive Project Portfolio"
        intro="Maui Johnson is an accomplished interior designer with over 15 years of experience in the hospitality industry. She has a diverse portfolio of notable projects that showcase her expertise and skill in the design of casinos and hotels, as well as her passion for sustainable and eco-friendly design, technology, and cultural sensitivity and representation of Native American tribes. From large-scale casino and hotel renovations, to the design of boutique hotels and restaurants, Maui has a proven track record of delivering innovative and successful projects for her clients."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Title>{project.name}</Card.Title>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              {/* <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p> */}
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
