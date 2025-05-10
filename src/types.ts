export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface PortfolioItemType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}