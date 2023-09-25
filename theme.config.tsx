import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";
import { NextSeoProps } from "next-seo";

const config: DocsThemeConfig = {
  logo: <span>Ultimate TeamVoided Documentation Assortment</span>,
  project: {
    link: 'https://github.com/TeamVoided/VoidLibDocs',
  },
  chat: {
    link: 'https://discord.gg/KZ5Q364hEg',
  },
  docsRepositoryBase: 'https://github.com/TeamVoided/VoidLibDocs',
  footer: {
    text: 'Ultimate TeamVoided Documentation Assortment',
  },
  useNextSeoProps: () => {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    let seoProps: NextSeoProps = { };

    if (route !== "/" || !frontMatter.title) {
      seoProps.title = `${frontMatter.title} - UTVDA`;
    } else {
      seoProps.title = "UTVDA";
    }

    return seoProps
  }
}

export default config
