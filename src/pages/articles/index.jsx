import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>
          Transforming Spaces, Inspiring Cultures: Exploring the World of
          Interior Design with Maui Johnson
        </title>
        <meta
          name="description"
          content="Transforming Spaces, Inspiring Cultures: Exploring the World of Interior Design with Maui Johnson"
        />
      </Head>
      <SimpleLayout
        title="Transforming Spaces, Inspiring Cultures: Exploring the World of Interior Design with Maui Johnson"
        intro="AMaui Johnson is an accomplished interior designer with over 15 years of experience in the hospitality industry. She is based out of Austin, Texas. Her writing highlights the importance of incorporating sustainable and eco-friendly design, technology and cultural sensitivity, and representation of Native American tribes in her work. She also talks about how her passion for traveling and exploring ancient Mesoamerican sites has influenced her work and understanding of different cultures and their architecture, helping her to create spaces that are not only beautiful but also meaningful, authentic, and respectful of the diverse cultural heritage."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
