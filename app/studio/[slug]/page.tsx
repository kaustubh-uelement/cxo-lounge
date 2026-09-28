import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/data/studio";
import { Badge, Section } from "@/components/ui";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? { title: a.title, description: a.dek } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug);
  return (
    <>
      <Section className="!pb-8">
        <article className="mx-auto max-w-2xl">
          <Link href="/studio" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" aria-hidden /> CIO Studio
          </Link>
          <Badge className="mt-8">{a.category}</Badge>
          <h1 className="display mt-4">{a.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-ink-strong">{a.dek}</p>
          <p className="mt-6 border-b border-line pb-6 text-sm text-ink-muted">{a.author} · {a.readMinutes} min read</p>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.8]">
            {a.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </article>
      </Section>
      <Section tone="white" className="!py-14">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">Read next</p>
          <ul className="mt-4 divide-y divide-line">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/studio/${m.slug}`} className="block py-4 text-lg font-medium text-ink-strong hover:text-brand-700">{m.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
