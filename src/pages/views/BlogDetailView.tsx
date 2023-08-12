import {View} from "@tarojs/components";
import React, {useState} from "react";
import Taro, {useReady} from "@tarojs/taro";
import {ApiWithBlogDetail} from "../../api/server_api";
import {Blog} from "../../types/models";
import MarkDownParse from "../../components/mk";

/**
 * 博客详情页面
 * @constructor
 */
const BlogDetailView: React.FC = () => {

  const instance = Taro.getCurrentInstance()
  const blogId = instance.router?.params['id'] ?? ""
  const [ blog,setBlog] = useState<Blog>()

  useReady(async ()=>{
    await getBlogDetailModel()
  })

  const getBlogDetailModel =async  () => {
    let result = await new ApiWithBlogDetail().request({data: {id:blogId}})
    setBlog(result.data)

  }

  return <View>
    {
        blog && <MarkDownParse>
          {blog.content}
        </MarkDownParse>
    }
  </View>
}
export default BlogDetailView