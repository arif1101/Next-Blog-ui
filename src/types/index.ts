export type Author = {
  id: number;
  name: string;
  email: string;
  password: string | null;
  role: "USER" | "ADMIN"; // extend if you have more roles
  picture: string;
  isVerified: boolean
};

export type Blog = {
  id: number;
  authorId: number;
  author: Author;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isFeatured: boolean;
  views: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};
