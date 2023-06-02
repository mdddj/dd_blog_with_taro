
import {BaseApiImpl} from "./base";
import {Blog, PageListWrapper} from "../types/blog";


export class ApiWithBlogList extends BaseApiImpl<PageListWrapper<Blog>> {
  apiUrl: string = "/api/blog/list";
}
