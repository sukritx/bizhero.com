import SingleBlog from "@/components/Blog/SingleBlog";
import CallToAction from "@/components/CallToAction";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lubrication Insights Blog | BizHero Lubricants",
  description:
    "Expert insights on industrial lubricants, used oil analysis, engine maintenance, and equipment reliability from BizHero Lubricants — the authorized distributor of Valvoline, PETRONAS, and Monroe.",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Blog;
