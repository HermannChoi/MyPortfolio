"use client";
/** @jsxImportSource @emotion/react */

import { blogStyles } from "@/app/styles/firstPageStyles/firstPageStyles";
import { projectSection } from "@/app/styles/timeLinePageStyles/projectSectionStyles";
import Image from "next/image";
import Link from "next/link";
import { FooterComponent } from "@/app/types/projectComponentTypes/footer";

const Footer: React.FC<FooterComponent> = ({ info }) => {
  return (
    <div css={projectSection.lastContainer}>
      <article css={projectSection.article}>
        {info.limit?.length! > 0 && <h3>한계 점</h3>}
        <p>{info.limit}</p>
        <h3>배운 점</h3>
        <p>{info.takeaway}</p>
        {info.output?.length! > 0 && <h3>성과</h3>}
        <p>{info.output}</p>
      </article>
      <div css={projectSection.linkContainer}>
        {info.links.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              css={blogStyles.container(link.name)}
            >
              <Image src={link.src} alt={link.name} css={blogStyles.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
