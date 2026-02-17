import Link from "next/link";
import { blogs } from "@/data/blogs";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">🧸 Toy Story Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 border-red-500 shadow-lg">
            <figure className="h-64">
              <img src={blog.image} alt={blog.title} />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="text-sm text-gray-600">
                {blog.author} • {blog.date}
              </p>
              <p>{blog.description}</p>

              <div className="card-actions justify-end">
                <Link href={`/blog/${blog.id}`} className="btn btn-primary ">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
