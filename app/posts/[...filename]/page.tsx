import { client } from '../../../tina/__generated__/client'
import Post from './client-page'

export default async function Page({ params }: { params: { filename: string[] } }) {
  const filename = params.filename.join('/') + '.md';
  const { data, query, variables } = await client.queries.post({ relativePath: filename });

  return <Post data={data} query={query} variables={variables} />;
}