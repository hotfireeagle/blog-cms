interface ITag {
  id: string
  name: string
}

export interface IResponse {
  content: string
  id: number
  title: string
  tags: Array<ITag>
}

export interface IArticle {
  content: string
  id?: number
  title: string
  tags: Array<string>
}