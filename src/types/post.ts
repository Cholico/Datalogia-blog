export interface PostAuthor {
  name: string;
  career: string;
}

export interface PostImage {
  asset: {
    _ref?: string; // cuando viene sin url directa
    _type: string;
    url?: string; // cuando ya tienes la url
  };
}

export type Category =
  | "Inteligencia-artificial"
  | "Analisis-de-datos"
  | "Ciencia-de-datos"
  | "Machine-learning"
  | "Estadistica"
  | "Matematicas"
  | "Programacion"
  | "Historia"
  | "Mision"
  | "Futuro";

export interface PostGalleryImage {
  asset: {
    _ref?: string;
    _type: string;
    url?: string;
  };
}

export interface PostContentBlock {
  _key: string;
  _type: "block" | "image";
  style?: string;
  children?: any[];
  asset?: {
    _ref?: string;
    _type: string;
    url?: string;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  image?: PostImage;
  excerpt?: string;
  author: PostAuthor;
  categories: Category[]; 
  gallery?: PostGalleryImage[];
  content?: PostContentBlock[];
  isFeatured?: boolean;
  createdAt?: string; // Puedes agregarlo si en Sanity usas _createdAt
}

