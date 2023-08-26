export type IReview = {
  name: string;
  email: string;
  comment: string;
};
export type IBooks = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: IReview[];
};
