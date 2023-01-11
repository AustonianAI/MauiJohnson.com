/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>
          Tools of the Trade - Maui Johnson's Workstation and Software
        </title>
        <meta
          name="description"
          content="Tools of the Trade - Maui Johnson's Workstation and Software"
        />
      </Head>
      <SimpleLayout
        title="Tools of the Trade - Maui Johnson's Workstation and Software"
        intro="Maui Johnson is a big believer in the idea that the tools you use have a huge impact on the quality of your work. Maui has spent a lot of time and money over the years to make sure that my computer and software setup is as good as it can be."
      >
        <div className="space-y-20">
          <ToolsSection title="PC Build">
            <Tool title="CPU: AMD Ryzen 9 3950X 3.5 GHz 16-Core Processor">
              This is an incredible 16 core processor that can really unleash
              the full capabilities of Revit in a smooth, snappy, and efficient
              way. Maui works with massive Revit builds, and the performance
              difference is clearly evident. For example, synching a series of
              design edits with the master Revit file stored in the cloud could
              be a 5-10 minute process. With this CPU, we can get it done in a
              couple of minutes or less, depending on the file size.
            </Tool>
            <Tool title="Motherboard: Gigabyte X570 I AORUS PRO WIFI Mini ITX AM4 Motherboard ">
              This is a powerhouse motherboard that holds the build all
              together. It has a ton of great features, including integrated
              WiFi.
            </Tool>
            <Tool title="CPU Cooler: Silverstone PF120-ARGB 94 CFM Liquid CPU Cooler">
              The AMD Ryzen 3950X doesn’t come with any kind of CPU cooler. This
              CPU’s 16 cores produce a ton of heat. The box from AMD recommends
              a liquid cooling system. The Silverstone PF120 accomplishes this
              while maintaining a compact form that fits nicely in the mini-ITX
              case. Liquid cooling may sound a bit intimidating, but it really
              just means there is a small pump connected to a radiator via some
              hoses.
            </Tool>
            <Tool title="Memory: Patriot Viper 4 Blackout 64GB">
              As modern office multitaskers can attest, RAM is important these
              days. There are tons of Google Chrome tabs open, along with Revit,
              Bluebeam, Sketchup, etc. and you start to see your PC get hung up
              on basic clicks and operations. RAM really isn’t that expensive,
              so she prefers to max it out whenever possible. The motherboard
              she is using is the smaller mini-ITX design, and it only has two
              RAM slots. Thus, she needed to put 32GB in each to arrive at a
              total of 64GB of RAM in this powerhouse architect PC.
            </Tool>
            <Tool title="Storage (Hard drive): Sabrent Rocket 500 GB ">
              She only has 500GB of file storage in this machine as most of her
              files are stored in the cloud. She doesn’t need to worry so much
              about local storage on our PC.
            </Tool>
            <Tool title="Video Card: Gigabyte GeForce GTX 1650">
              She has a relatively basic video card in this PC. Cooling is
              important for every component in this system. This card gives her
              the ability to have up to 3 monitors for this computer.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, Sublime Text is still the best text
              editor ever made.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Reflect">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
