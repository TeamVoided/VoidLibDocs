import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";
import { NextSeoProps } from "next-seo";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/TeamVoided/VoidLibDocs',
  },
  chat: {
    link: 'https://discord.gg/KZ5Q364hEg',
  },
  docsRepositoryBase: 'https://github.com/TeamVoided/VoidLibDocs',
  footer: {
    text: 'VoidLib Docs',
  },
  useNextSeoProps: () => {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    let seoProps: NextSeoProps = { };

    if (route !== "/" || !frontMatter.title) {
      seoProps.title = `${frontMatter.title} - VoidLib Docs`;
    } else {
      seoProps.title = "VoidLib Docs";
    }

    return seoProps
  }
}

export default config
