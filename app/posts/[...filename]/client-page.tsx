'use client'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type { PostQuery } from '../../../tina/__generated__/types'
import Image from 'next/image'

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
            {/* Header image dari CMS jika ada, fallback ke default */}
            {data.post.headerImage ? (
              <div className="mb-8">
                <Image
                  src={data.post.headerImage}
                  alt={data.post.title}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            ) : (
              <div className="mb-8">
                <Image
                  src="/mansion-header.png" // Gambar default
                  alt="Default Header"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            )}
            <h1 className="text-4xl font-bold text-center text-amber-200 mb-8 leading-tight drop-shadow">
              {data.post.title}
            </h1>
            <article className="prose prose-invert max-w-none text-amber-200 prose-li:marker:text-amber-400 prose-table:border prose-table:border-amber-700 prose-th:border prose-th:border-amber-700 prose-td:border prose-td:border-amber-700 prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-stone-800/60 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-amber-300 prose-code:bg-stone-900 prose-code:text-amber-300 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:bg-stone-900 prose-pre:text-amber-200 prose-pre:rounded-xl prose-pre:p-4">
              <TinaMarkdown content={data.post.body} components={{
                ul: (props: any) => <ul {...props} className="list-disc pl-6" />,
                ol: (props: any) => <ol {...props} className="list-decimal pl-6" />,
                li: (props: any) => <li {...props} className="mb-1" />,
                table: (props: any) => <table {...props} className="w-full border-collapse" />,
                th: (props: any) => <th {...props} className="border border-amber-700 px-2 py-1" />,
                td: (props: any) => <td {...props} className="border border-amber-700 px-2 py-1" />,
                blockquote: (props: any) => <blockquote {...props} className="border-l-4 border-amber-500 bg-stone-800/60 pl-6 italic text-amber-300 my-4" />,
                code: (props: any) => <code {...props} className="bg-stone-900 text-amber-300 rounded px-1 py-0.5" />,
                pre: (props: any) => <pre {...props} className="bg-stone-900 text-amber-200 rounded-xl p-4" />,
              }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}