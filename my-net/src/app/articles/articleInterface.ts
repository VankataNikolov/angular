import { IArticleDetails } from './articleDetails';

export interface IArticle {
    title: string;
    img: string,
    details: IArticleDetails[]
}