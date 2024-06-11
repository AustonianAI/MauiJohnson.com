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
          Resume | Maui Johnson
        </title>
        <meta
          name="description"
          content="Resume | Maui Johnson"
        />
      </Head>
      <SimpleLayout
        title="Resume"
        intro="Here you will find my up to date resume in both a graphic and printer friendly text format."
      >
        <div>
          
        </div>
      </SimpleLayout>
    </>
  )
}
