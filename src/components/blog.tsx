import {Blog} from "../types/models";
import React from "react";
import {View} from "@tarojs/components";
import {goToBlogDetail} from "../util/Router";

const BlogCard: React.FC<{ blog: Blog }> = ({blog}) => {

    /**
     * 跳转到详情
     */
    const toDetailPage = async () => {
        await goToBlogDetail(blog.id)
    }

    return <View className={'blog-card'} onClick={toDetailPage}>
        <View className={'blog-title'}>{blog.title}</View>
        <View className={'blog-subtitle'}>{blog.author} - {blog.dateString}</View>
    </View>
}
export default BlogCard