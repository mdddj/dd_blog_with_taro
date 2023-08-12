
import {BaseApiImpl} from "./base";
import {Blog, PageListWrapper, StatisticsModel} from "../types/models";


/**
 * 博客列表接口
 */
export class ApiWithBlogList extends BaseApiImpl<PageListWrapper<Blog>> {
  apiUrl: string = "/api/blog/list";
}

/**
 * 统计数据接口
 */
export class ApiWithStatistics extends BaseApiImpl<StatisticsModel>{
  apiUrl = "/api/blog/statistics"
}

/**
 * 标签ID获取博客列表
 */
export class ApiWithBlogListByTag extends BaseApiImpl<PageListWrapper<Blog>>{
  apiUrl: string = "/api/blog/tag/blogs"
}

/**
 * 获取博客详情
 */
export class ApiWithBlogDetail extends  BaseApiImpl<Blog>{
  apiUrl : string = "/api/blog/get"
}