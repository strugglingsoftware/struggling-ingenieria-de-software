// src/components/GiscusComponent.js
import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="strugglingsoftware/struggling-ingenieria-de-software"
      repoId="R_kgDOPbWrng"
      category="General"
      categoryId="DIC_kwDOPbWrns4CuC1x"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="es"
      loading="lazy"
    />
  );
}
