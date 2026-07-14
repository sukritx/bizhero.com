export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  isTitle?: boolean;
  description?: string;
  submenu?: Menu[];
};

export type Brand = {
  slug: string;
  name: string;
  description: string;
  logo: string;
  products: {
    name: string;
    items: string[];
  }[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  applications: string[];
  icon: string;
  brands: { name: string; items: string[] }[];
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: string[];
  applications: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  image: string;
};
