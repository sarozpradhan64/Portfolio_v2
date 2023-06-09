import Image from "next/image";
import Link from "next/link";
import React from "react";
import SrzLayout from "../components/SrzLayout";
export default function tools({tools}) {

  return (
    <SrzLayout title="Tools">
        {tools.length >= 1 ? (
          tools.map((work, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-img  rounded overflow-hidden">
                <Image
                  className="img-fluid object-cover"
                  src={work.image}
                  alt="gyannhub"
                  fill
                />
                <div className="portfolio-btn position-relative">
                  <a rel="noreferrer" href={work.href} target="_blank">
                    {" "}
                    <h3 className="portfolio-hover-title">{work.title}</h3>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-white">No tools yet</h3>
        )}
    </SrzLayout>
  );
}

export async function getStaticProps() {
  const { tools } = await import("../src/toolsData.json");
  return {
    props: { tools },
  };
}
