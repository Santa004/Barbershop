export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon?: string;
};

export type Review = {
  id: string;
  quote: string;
  author: string;
  location: string;
  source: string;
  sourceUrl: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  tags: string[];
  instagram?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  href?: string;
  external?: boolean;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  bookingUrl: string;
  phone: string;
  phoneLink: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    region: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  mapsUrl: string;
  mapsEmbedUrl: string;
  instagram: string;
  openingHours: Array<{ label: string; value: string }>;
  cancellationPolicy: string;
};
