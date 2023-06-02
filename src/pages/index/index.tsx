import {useState} from "react";
import { View } from "@tarojs/components";
import {useReady} from "@tarojs/taro";
import './index.less'
import {ApiWithBlogList} from "../../api/server_api";
import React from "react";
import {Blog} from "../../types/blog";
import {VirtualList} from "@nutui/nutui-react-taro";





export default function Index() {


  const [blogs,setBlogs] = useState<Blog[]>([])


  const fetchBlog = async (page: number) => {
   let result = await new ApiWithBlogList().request({pageModel: {page: page, pageSize: 20}})
    if(result.success){
      setBlogs([...blogs,...result.data?.list ?? []])
    }
  }

  useReady(async ()=>{
    await fetchBlog(1)
  })


  const ItemRender = ({ data }) => {
      console.log(data)
    return <View>{data.title}</View>
  }
  const ItemRenderMemo = React.memo(ItemRender)

  return (
    <View>
      <VirtualList sourceData={blogs} ItemRender={ItemRenderMemo} itemEqualSize={false} />
    </View>
  )
}
