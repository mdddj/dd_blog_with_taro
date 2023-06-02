import {View, Text, Image} from "@tarojs/components";
import Taro, {useReady} from '@tarojs/taro'
import React, {useState} from "react";
import './image.less'




const Row = (data,index,pageIndex) => {
  const item = data as ResCategory
  return (
    <View className='grid-item' onClick={async ()=>{
      Taro.preload('category',item)
      await Taro.navigateTo({url: '/pages/resource/resource?id=' + item.id})
    }}
    >
      <View style={{position: 'relative'}}>
        <Image style={{width: '100%',borderRadius: 20,height:'100%'}} mode='widthFix' src={data.logo} />
        <view className='gallery-mask' />
        <View style={{position: 'absolute', left: 12,top: 12}}> <Text className='my-card-title'>{item.name}</Text></View>
      </View>

    </View>
  );
}

const pageSize = 10;

const ImagePage: React.FC = () => {


  const [list, setList] = useState<ResCategory[]>([])
  const [initLoading, setInitLoading] = useState<boolean>(true)
  const [screenHeight, setScreenHeight] = useState<number>(1000)
  const [nextLoading, setNextLoading] = useState<boolean>(false)
  const [page,setPage] = useState<number>(0)
  const [noMore,setNoMore] = useState<boolean>(false)

  /// 页面启动完成执行函数
  useReady(async () => {
    await getWindowHeight()
    setInitLoading(false)
  })


  const getWindowHeight = async () => {
    await Taro.getSystemInfo({
      success: res => {
        setScreenHeight(res.windowHeight)
      }
    })
  }


  /// 加载下一页
  const fetchNextPage = () => {
    setNextLoading(true)
    let nextPage = page + 1;
    setPage(nextPage)
    Api.instance().getResourceCategoryList({pageSize:pageSize,page:nextPage}).then(value => {
      setNextLoading(false)
      successResultHandle(value,data => {
        let newList = list.concat(data.list)
        setList(newList)
        hasNoMore(data.page)
      })
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const hasNoMore = (page: PagerModel) => {
    setNoMore(page.paged)
  }

  if (initLoading) {
    return <Text>加载中</Text>
  }

  return <View>
    {/*<VirtualList*/}
    {/*  list={list}*/}
    {/*  listType='multi'*/}
    {/*  pageNum={page+1}*/}
    {/*  onRender={Row}*/}
    {/* sourceData={list}>*/}
    {/*</VirtualList>*/}
    {
      noMore && <View style={{height:30,textAlign:"center",color:'grey',fontSize: 12,background: '#f7f7f7',lineHeight: '30px'}}>
        <Text>全部加载完毕</Text>
      </View>
    }
  </View>
}
export default ImagePage
