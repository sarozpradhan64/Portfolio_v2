"use client";

import React, { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Button from "./Button";

const Skills = ({ skills }) => {
  const [loadMore, setLoadMore] = useState(false);
  const displayedSkills = useMemo(
    () => (loadMore ? skills : skills.slice(0, 12)),
    [loadMore, skills]
  );

  console.log(skills);

  return (
    <div className="mt-16">
      <SectionTitle title="My Skills !" />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {displayedSkills.map((skill) => (
          <div
            key={skill.title}
            className="group  bg-[#1C1F26]  p-4 flex justify-center items-center flex-col rounded-md border border-transparent hover:border-gray-600 hover:shadow-md"
          >
            <Image
              src={skill.path}
              height={50}
              width={50}
              alt={skill.title}
              className="rounded-none cursor-pointer"
            />
            <p className="mt-4 text-sm select-none cursor-pointer tracking-wide group-hover:text-white">
              <a href={skill.link} target="_blank" rel="noreferrer">
                {skill.title}
              </a>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button color="primary" onClick={() => setLoadMore(!loadMore)}>
          {loadMore ? "View Less.." : "Load More.."}
        </Button>
      </div>
    </div>
  );
};

export default Skills;
