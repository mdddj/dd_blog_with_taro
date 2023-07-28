import {useState} from "react";
import {ScrollView} from "@tarojs/components";
import {useReady} from "@tarojs/taro";
import {ApiWithBlogList} from "../../api/server_api";
import {Blog} from "../../types/models";
import BlogList from "../../components/BlogList";





export default function Index() {


  const [blogs,setBlogs] = useState<Blog[]>([])


  const fetchBlog = async (page: number) => {
   let result = await new ApiWithBlogList().request({pageModel: {page: page, pageSize: 20}})
    if(result.success){
      setBlogs([...blogs,...result.data?.list ?? []])
    }
  }

  useReady(async ()=>fetchBlog(1))



  return (
    <ScrollView>
        <BlogList request={ async page => {
           return await new ApiWithBlogList().request({pageModel: {page: page, pageSize: 20}})
        } } />
    </ScrollView>
  )
}
