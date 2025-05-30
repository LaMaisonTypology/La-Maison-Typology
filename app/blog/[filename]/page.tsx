import client from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { notFound } from "next/navigation";
import HeaderBanner from "../../components/header-banner";

export default async function BlogPostPage({ params }: { params: { filename: string } }) {
  const { filename } = params;
  let postData;
  try {
    const res = await client.queries.post({ relativePath: `${filename}.md` });
    postData = res.data.post;
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <HeaderBanner
        title={postData.title}
        subtitle="Blog Post"
        imagePath="/mansion-header.png"
        height="min-h-[40vh]"
      />
      <main className="container mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="bg-gradient-to-br from-stone-900/95 to-amber-950/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-800/30">
          <article className="prose prose-invert max-w-3xl mx-auto text-amber-200">
            <TinaMarkdown content={postData.body} />
          </article>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const postsListData = await client.queries.postConnection();
  const posts = postsListData.data.postConnection.edges || [];
  return posts
    .filter((edge) => edge && edge.node && edge.node._sys && edge.node._sys.filename)
    .map((edge) => ({ filename: edge!.node!._sys.filename }));
}
