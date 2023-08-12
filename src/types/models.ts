



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

/**
 * 资源分类，分类
 */
export interface ResourceCategory {
  description?: string;
  id?: number;
  level?: number;
  logo?: string;
  name?: string;
  type?: string;
}


export interface Resource {
  authority:      null;
  browserUrl:     string;
  category:       Category;
  clickCount:     null;
  content:        string;
  createDate:     null;
  description:    string;
  fileInfo:       null;
  id:             number;
  images:         any[];
  label:          string;
  links:          string;
  thumbnailImage: string;
  title:          string;
  type:           string;
  updateDate:     null;
  user:           User;
}

export interface Category {
  description: string;
  id:          number;
  level:       number;
  logo:        string;
  name:        string;
  type:        string;
}

export interface User {
  accountNonExpired:     boolean;
  accountNonLocked:      boolean;
  authorities:           Authority[];
  city:                  string;
  credentialsNonExpired: boolean;
  email:                 string;
  enabled:               boolean;
  enterprise:            Enterprise;
  id:                    number;
  intro:                 string;
  job:                   string;
  loginNumber:           string;
  loginTime:             Date;
  nickName:              string;
  openAiFlag:            boolean;
  openAiTokens:          number;
  phone:                 string;
  picture:               string;
  relationId:            string;
  roles:                 Authority[];
  showName:              string;
  status:                number;
  type:                  number;
  username:              string;
  vip:                   number;
  wallet:                number;
}

export interface Authority {
  authority:   string;
  createDate:  null;
  icon:        string;
  id:          number;
  name:        string;
  note:        string;
  permissions: any[];
  sort:        number;
  status:      number;
}

export interface Enterprise {
  enable:  boolean;
  id:      number;
  name:    string;
  phone:   string;
  profile: string;
  qq:      string;
  wechat:  string;
}


export interface JpaPage<T> {
  content:          T[];
  empty:            boolean;
  first:            boolean;
  last:             boolean;
  number:           number;
  numberOfElements: number;
  size:             number;
  totalElements:    number;
  totalPages:       number;
}