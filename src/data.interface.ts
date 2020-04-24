export interface ITag {
  id: number
  name: string
}

export interface IArticle {
  id: number
  title: string
  tags: Array<ITag>
}

export interface IArticleListResponse {
  result: Array<IArticle>
  total: number
}