'use client'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type { PostQuery } from '../../../tina/__generated__/types'

interface ClientPageProps {
  query: string
  variables: { relativePath: string }
  data: PostQuery
}

export default function Post(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

 return (
    <div className="relative py-16 min-h-screen bg-gradient-to-br from-stone-900/95 to-amber-950/95 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        {/* SVG background tetap */}
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          {/* ...SVGs seperti sebelumnya... */}
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-stone-800/90 to-amber-900/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-800/30 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-center text-amber-200 mb-8 leading-tight drop-shadow">
              {data.post.title}
            </h1>
            <article className="prose prose-invert max-w-none text-amber-200">
              <TinaMarkdown content={data.post.body} />
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}