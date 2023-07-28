import {View} from "@tarojs/components";
import React from "react";
import Taro, {useReady} from "@tarojs/taro";

/**
 * 博客详情页面
 * @constructor
 */
const BlogDetailView: React.FC = () => {

  const instance = Taro.getCurrentInstance()
  const blogId = instance.router?.params['id'] ?? ""

  useReady(()=>{
    console.log(blogId)
  })

  return <View>
  </View>
}
export default BlogDetailView