import { client } from '../../../tina/__generated__/client'
import Post from './client-page'
import { PageProps as NextPageProps } from 'next';
import PageProps from "next"
// Adjust the type definition to align with Next.js expectations
interface PageProps extends NextPageProps {
  params: {
    filename: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const filename = params.filename.join('/') + '.md'
  const { data, query, variables } = await client.queries.post({ relativePath: filename })

  return <Post data={data} query={query} variables={variables} />
}