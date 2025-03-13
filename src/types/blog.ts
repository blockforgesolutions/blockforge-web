/* eslint-disable @typescript-eslint/consistent-type-imports */

// ----------------------------------------------------------------------

import { IAuthorProps } from "./author";
import { ISocialLinks } from "./socials";

export type IBlogCategoryProps = {
  label: string;
  path: string;
};

export type IBlogPostProps = {
  id: string;
  title: string;
  heroUrl: string;
  tags?: string[];
  createdAt: Date;
  coverUrl: string;
  duration: string;
  content: string;
  favorited: boolean;
  description: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  shareLinks?: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
};
