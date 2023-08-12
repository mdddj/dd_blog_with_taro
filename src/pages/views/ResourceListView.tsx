import React, {useState} from "react";
import {ApiWithResourceList} from "../../api/server_api";
import Taro, {useReady} from "@tarojs/taro";
import {Resource} from "../../types/models";
import {View} from "@tarojs/components";


/**
 * 动态列表页面
 * @constructor
 */
const ResourceListView: React.FC = () => {


    const instance = Taro.getCurrentInstance()
    const name = instance.router?.params['name'] ?? ""


    const [list,setList] = useState<Resource[]>([])

    useReady(()=>fetchData())

    const fetchData =async () => {
        let result =  await new ApiWithResourceList().request({
            data: {
                "page":0,
                "pageSize": 1000,
                "name":name
            }
        });

        if(result.success){
            setList(result.data?.content??[])
        }
    }

    return <>

        {
            list.map(value => {
                return <ResourceItemCard item={value} key={value.id} />
            })
        }
    </>
}





//卡片布局
const ResourceItemCard: React.FC<{item: Resource}> = ({item}) => {

    return <View>
        {
            item.content
        }
    </View>
}

export default ResourceListView