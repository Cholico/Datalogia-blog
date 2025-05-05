import { PortableText, PortableTextComponents } from "@portabletext/react";
import TooltipTerm from "./TooltipTerm";
import useGlossary from "../hooks/useGlossary";

interface Props {
  value: any;
}

function PortableTextRenderer({ value }: Props) {
  const { terms } = useGlossary();

  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        const asset = value?.asset;

        if (!asset?.url) {
          return (
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500">
              Imagen no disponible
            </div>
          );
        }

        return (
          <img
            src={asset.url}
            alt={value.alt || "Imagen del artículo"}
            className="w-full rounded-xl my-6"
            loading="lazy"
          />
        );
      },
    },

    block: {
      p: ({ children }) => {
        const text = (Array.isArray(children) ? children[0] : children) as string;

        // Si no hay texto → renderiza normal
        if (!text) {
          return <p className="leading-relaxed text-lg text-gray-300 mb-4">{children}</p>;
        }

        // Procesar texto palabra por palabra
        const words = text.split(" ");

        const highlighted = words.map((word, index) => {
          const cleanWord = word.replace(/[.,!?;:()]/g, "").toLowerCase();

          const found = terms.find((term) => term.term.toLowerCase() === cleanWord);

          if (found) {
            return (
              <TooltipTerm key={index} definition={found.definition}>
                <span className="text-blue-500 underline">{word}</span>{" "}
              </TooltipTerm>
            );
          }

          return <span key={index}>{word} </span>;
        });

        return <p className="leading-relaxed text-lg text-gray-300 mb-4">{highlighted}</p>;
      },

      h1: ({ children }) => <h1 className="text-4xl font-bold mt-10 mb-6 text-white">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-semibold mt-8 mb-4 text-white">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-medium mt-6 mb-3 text-white">{children}</h3>,

      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-4">
          {children}
        </blockquote>
      ),
    },

    list: {
      bullet: ({ children }) => <ul className="list-disc ml-6 text-gray-300 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal ml-6 text-gray-300 mb-4">{children}</ol>,
    },

    marks: {
      strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
      em: ({ children }) => <em className="italic text-gray-400">{children}</em>,
    },
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}

export default PortableTextRenderer;
