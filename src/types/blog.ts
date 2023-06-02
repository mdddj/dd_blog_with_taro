export interface Blog {
  aliasString: string;
  author:      string;
  category:    Category;
  content:     string;
  createTime:  string;
  dateString:  string;
  id:          number;
  tags:        Tag[];
  thumbnail:   string;
  title:       string;
}

export interface Category {
  createTime: string;
  id:         number;
  intro:      string;
  logo:       string;
  name:       string;
}

export interface Tag {
  id:   number;
  name: string;
}

export interface Pager {
  currentPage: number;
  hasPrevious: boolean;
  maxPage:     number;
  pageSize:    number;
  paged:       boolean;
  total:       number;
}

export interface PageListWrapper<T> {
  list: T[],
  page: Pager
}
