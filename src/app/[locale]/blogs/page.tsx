import { getDictionary, Locale } from "@/i18n/i18n";
import SingleBlog from "@/components/Blog/SingleBlog";
import CallToAction from "@/components/CallToAction";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.blogs.title,
    description: dict.metadata.blogs.description,
    alternates: { canonical: `https://bizhero.com/${locale}/blogs`, languages: { th: "https://bizhero.com/th/blogs", en: "https://bizhero.com/en/blogs" } },
  };
}

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"], locale);

  return (
    <>
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction dict={dict} />
    </>
  );
}
