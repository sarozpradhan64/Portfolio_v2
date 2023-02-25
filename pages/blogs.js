import Image from "next/image";
import Link from "next/link";
import React from "react";
import SrzLayout from "../components/SrzLayout";
import data from "../src/data";
export default function blogs({ posts }) {
  console.log(posts);
  return (
    <SrzLayout title="Blogs">
      <div className="row g-4" data-wow-delay="0.1s">
        {posts.length >= 1 ? (
          posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="rounded position-relative"
                style={{ minHeight: "250px" }}
              >
                <Image
                  className="img-fluid object-cover"
                  src={`https://blazecodes.com${post.thumbnail}`}
                  alt={post.title}
                  fill
                />
              </div>
              <div className="mt-3">
                <p>{post.category.title}</p>
                <a
                  href={`https://blazecodes.com/post/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  {" "}
                  <h3 className="text-white">{post.title}</h3>
                </a>
                <a
                  href={`https://blazecodes.com/post/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  Read
                </a>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-white">No Blogs yet</h3>
        )}
      </div>
    </SrzLayout>
  );
}

export async function getStaticProps() {
  var res = await fetch(`https://blazecodes.com/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // Revalidate every 10 seconds with new data.
  };
}
