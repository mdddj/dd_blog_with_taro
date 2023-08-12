import {BaseApiImpl} from "./base";
import {Blog, JpaPage, PageListWrapper, Resource, ResourceCategory, StatisticsModel} from "../types/models";


/**
 * 博客列表接口
 */
export class ApiWithBlogList extends BaseApiImpl<PageListWrapper<Blog>> {
    apiUrl: string = "/api/blog/list";
}

/**
 * 统计数据接口
 */
export class ApiWithStatistics extends BaseApiImpl<StatisticsModel> {
    apiUrl = "/api/blog/statistics"
}

/**
 * 标签ID获取博客列表
 */
export class ApiWithBlogListByTag extends BaseApiImpl<PageListWrapper<Blog>> {
    apiUrl: string = "/api/blog/tag/blogs"
}

/**
 * 获取博客详情
 */
export class ApiWithBlogDetail extends BaseApiImpl<Blog> {
    apiUrl: string = "/api/blog/get"
}

/**
 * 查询资源分类
 */
export class ApiWithResourceCategory extends BaseApiImpl<PageListWrapper<ResourceCategory>> {
    apiUrl: string = "/api/res/list";
}

/**
 * /api/app/resource/list
 */
export class ApiWithResourceList extends BaseApiImpl<JpaPage<Resource>> {
    apiUrl: string = "/api/app/resource/list"

}