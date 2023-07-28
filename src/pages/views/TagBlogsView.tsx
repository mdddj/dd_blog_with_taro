import {View} from "@tarojs/components";
import BlogList from "../../components/BlogList";
import React from "react";
import {ApiWithBlogListByTag} from "../../api/server_api";
import Taro, {useReady} from "@tarojs/taro";


/**
 * 标签博客列表
 * @constructor
 */
const TagBlogsView: React.FC = () => {

    const instance = Taro.getCurrentInstance()


    useReady(()=>{
        Taro.setNavigationBarTitle({
            title: instance.router?.params['title'] ?? ''
        })
    })

    return <View>
        <BlogList request={async page => {
            return await new ApiWithBlogListByTag().request({
                data: {
                    "tagId": instance.router?.params.tagId
                },
                pageModel: {
                    page: page,
                    pageSize: 20
                }
            })
        }}/>
    </View>
}
export default TagBlogsView