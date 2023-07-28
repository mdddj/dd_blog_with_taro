import React, {useState} from 'react'
import {View} from '@tarojs/components'
import './category.less'
import {StatisticsModel} from "../../types/models";
import {ApiWithStatistics} from "../../api/server_api";
import Taro, {useReady} from "@tarojs/taro";
import ListTile from "../../components/ListTile";
import './category.less'


///分类页面
const CategoryIndex: React.FC = () => {

    const [data, setData] = useState<StatisticsModel>()
    const [, setLoading] = useState(true)

    useReady(async () => {
        const result = await new ApiWithStatistics().request()
        console.log(result)
        if (result.data) {
            setData(result.data)
        }
        setLoading(false)
    })

    return <View className={'index '}>
        <View className={'header-title'}>归档</View>
        {data &&
            data.archiveModels.map(value => {
                return <ListTile title={value.months} subTile={value.blogs.length + '篇'} onClick={() => {

                }}/>
            })
        }
        <View className={'header-title'}>分类</View>
        {
            data && data.categoryList.map(value => {
                return <ListTile title={value.name} subTile={value.intro} image={value.logo}/>
            })
        }
        <View className={'header-title'}>标签</View>
        {
            data && data.tags.map(value => {
                return <ListTile title={value.name} onClick={() => {
                    Taro.navigateTo({
                        url: `/pages/views/TagBlogsView?tagId=${value.id}&title=${value.name}`
                    })
                }}/>
            })
        }
    </View>
}

export default CategoryIndex