import {Image, View} from "@tarojs/components";
import React, {useState} from "react";
import './image.less'
import {ApiWithResourceCategory} from "../../api/server_api";
import {ResourceCategory} from "../../types/models";
import {useReady} from "@tarojs/taro";
import {goToResourceListPage} from "../../util/Router";







const ImagePage: React.FC = () => {



  const [ categoryList,setCategoryList] = useState<ResourceCategory[]>([])



  useReady(()=>fetchData())

  const fetchData = async  () => {

    let response = await new ApiWithResourceCategory().request({
      data: {
        "page": 0,
        "pageSize": 100,
        "type": "images"
      }
    })
    if(response.success){
      setCategoryList(response.data?.list??[])
    }

  }


  return <View>

    <View className={'image-container'}>
      {
        categoryList.map(value => {
          return <View key={value.id} className={'i-item'} onClick={async ()=>{
            if(value.name){
              await goToResourceListPage(value.name ?? "")
            }

          }}>
              <Image src={'https://bit.ly/2Z4KKcF?w=164&h=164&fit=crop&auto=format'} mode={'widthFix'}  />
            <View className={'i-name'}>{value.name}</View>
          </View>
        })
      }
    </View>
  </View>
}
export default ImagePage
