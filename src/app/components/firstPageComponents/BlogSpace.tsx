"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Github from "@/app/assets/svg/github.svg";
import Notion from "@/app/assets/svg/notionW.svg";
import Velog from "@/app/assets/svg/velog.svg";
import { blogStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import Link from "next/link";
import { blogs } from "@/app/constants/blogs";

const BlogSpace = () => {
  const images = [Github, Notion, Velog];

  return (
    <div css={[blogStyles.whole]}>
      {blogs.map((blog, i) => {
        return (
          <Link
            key={i}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            css={blogStyles.container(blog.name)}
          >
            <Image src={images[i]} alt={blog.name} css={[blogStyles.image]} />
          </Link>
        );
      })}
    </div>
  );
};

export default BlogSpace;
