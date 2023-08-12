



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
  html:        string;
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


//--统计
export interface StatisticsModel {
  archiveModels: ArchiveModel[];
  blogCount:     number;
  cateCount:     number;
  categoryList:  Category[];
  monthsCounts:  MonthsCount[];
  tagCount:      number;
  tags:          Tag[];
}

export interface ArchiveModel {
  blogs:  Blogs[];
  count:  number;
  months: string;
}

export interface Blogs {
  createTime: Date;
  id:         number;
  title:      string;
}


export interface MonthsCount {
  count:  number;
  months: string;
}

export interface Tag {
  id:   number;
  name: string;
}
