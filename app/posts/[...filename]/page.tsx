import { client } from '../../../tina/__generated__/client'
import Post from './client-page'

// Adjusted the implementation to handle `params` as a Promise
export default async function Page({ params }: { params: Promise<{ filename: string[] }> }) {
  const resolvedParams = await params;
  const filename = resolvedParams.filename.join('/') + '.md';
  const { data, query, variables } = await client.queries.post({ relativePath: filename });

  return <Post data={data} query={query} variables={variables} />;
}