"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Github from "@/app/assets/svg/github.svg";
import Notion from "@/app/assets/svg/notionW.svg";
import Velog from "@/app/assets/svg/velog.svg";
import { blogStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import Link from "next/link";

const BlogSpace = () => {
  return (
    <div css={[blogStyles.whole]}>
      <Link href={"https://github.com/HermannChoi"} css={blogStyles.container}>
        <Image src={Github} alt="github" css={[blogStyles.image]} />
      </Link>
      <Link
        href={
          "https://www.notion.so/Hermann-Page-9072ccd604314ddba7fb0c620cc8bf2b"
        }
        css={blogStyles.container}
      >
        <Image src={Notion} alt="github" css={[blogStyles.image]} />
      </Link>
      <Link
        href={"https://velog.io/@hiyunseok347/posts"}
        css={blogStyles.container}
      >
        <Image src={Velog} alt="github" css={[blogStyles.image]} />
      </Link>
    </div>
  );
};

export default BlogSpace;
