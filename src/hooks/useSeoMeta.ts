// src/hooks/useSeoMeta.ts

import { useEffect } from "react";

interface Props {
  title: string;
  description?: string;
  image?: string;
}

function useSeoMeta({ title, description, image }: Props) {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Meta description
    if (description) setMetaTag("description", description);

    // Canonical
    const canonicalUrl = window.location.href;
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Open Graph
    setOgTag("og:title", title);
    setOgTag("og:description", description || "");
    setOgTag("og:type", "article");
    setOgTag("og:url", canonicalUrl);
    if (image) setOgTag("og:image", image);
  }, [title, description, image]);
}

export default useSeoMeta;
