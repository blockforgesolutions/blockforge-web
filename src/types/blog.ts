/* eslint-disable @typescript-eslint/consistent-type-imports */

// ----------------------------------------------------------------------

import { IDateValue } from "./common";
import { IAuthorProps } from "./author";
import { ISocialLinks } from "./socials";

export type IBlogCategoryProps = {
  label: string;
  path: string;
};

export type IBlogPostProps = {
  id: string;
  title: string;
  slug?: string;
  titleTr?: string;
  heroUrl: string;
  tags?: string[];
  createdAt: Date;
  coverUrl: string;
  duration: string;
  durationTr?: string;
  content: string;
  contentTr?: string;
  favorited: boolean;
  description: string;
  descriptionTr?: string;
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


export type IPostItem = {
  id: string;
  title: string;
  tags: string[];
  publish: string;
  content: string;
  heroUrl: string;
  coverUrl: string;
  metaTitle: string;
  totalViews: number;
  totalShares: number;
  duration: string;
  favorited: boolean;
  description: string;
  totalComments: number;
  totalFavorites: number;
  metaKeywords: string[];
  metaDescription: string;
  comments: IPostComment[];
  createdAt: IDateValue;
  favoritePerson: { name: string; avatarUrl: string }[];
  author: IAuthorProps;
  shareLinks?: ISocialLinks;
};

export type IPostFilters = {
  publish: string;
};

export type IPostHero = {
  title: string;
  coverUrl: string;
  createdAt?: IDateValue;
  author?: { name: string; avatarUrl: string };
};

export type IPostComment = {
  id: string;
  name: string;
  avatarUrl: string;
  message: string;
  postedAt: IDateValue;
  users: { id: string; name: string; avatarUrl: string }[];
  replyComment: {
    id: string;
    userId: string;
    message: string;
    tagUser?: string;
    postedAt: IDateValue;
  }[];
}
