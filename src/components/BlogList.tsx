import React, {useState} from "react";
import {View} from "@tarojs/components";
import {Blog, PageListWrapper, Pager} from "../types/models";
import {useReady} from "@tarojs/taro";
import BlogCard from "./blog";
import {Result} from "../api/base";

type BlogListProperties = {
    request: (page: number) => Promise<Result<PageListWrapper<Blog>>>
}


/**
 * 博客列表组件
 * @param request 参数
 * @constructor
 */
const BlogList: React.FC<BlogListProperties> = ({request}) => {


    const [page, setPage] = useState(1)
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [initLoading, setInitLoading] = useState(true)
    const [pager,setPager] = useState<Pager|undefined>(undefined)

    /**
     * 加载博客数据
     */
    const doRequest = async () => {
        let result = await request(page)
        if(result.data){
            if(page == 1){
                setPager(result.data.page)
            }
            setBlogs([...blogs, ...result.data.list])
            setPage(page + 1)
            setInitLoading(false)
        }else{
            console.log(`加载失败:${result.message}`)
        }

    }

    useReady(doRequest)

    return <View>


        {initLoading && <View>加载中...</View>}

        {

            !initLoading && blogs.map(value => <BlogCard blog={value} key={value.id}/>)

        }

        {
            pager && !pager.paged && <View className={'text-center margin-8'} onClick={()=>doRequest()}>查看更多</View>
        }

        {
            pager && pager.paged && <View className={'text-center margin-8'}>没有更多了</View>
        }


    </View>
}

export default BlogList