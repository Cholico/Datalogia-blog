import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";

export interface GlossaryTerm {
    _id: string;
    term: string;
    slug: { current: string };
    definition: string;
    relatedCategories: string[];
  }

  export default function useGlossary(){
    const [terms, setTerms] = useState<GlossaryTerm[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client
          .fetch(`*[_type == "glossary"] | order(term asc)`)
          .then((data) => {
            setTerms(data);
            setLoading(false);
          });
      }, []);

      return { terms, loading };

  }