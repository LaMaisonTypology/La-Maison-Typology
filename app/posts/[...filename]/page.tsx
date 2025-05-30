import { client } from '../../../tina/__generated__/client'
import Post from './client-page'

// Define a compatible type for params
interface PageProps {
  params: {
    filename: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const filename = params.filename.join('/') + '.md'
  const { data, query, variables } = await client.queries.post({ relativePath: filename })

  return <Post data={data} query={query} variables={variables} />
}