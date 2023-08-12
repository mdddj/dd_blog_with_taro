import Taro from "@tarojs/taro";


/**
 * 跳转到博客详情页面
 * @param id
 */
export async function goToBlogDetail(id: number): Promise<TaroGeneral.CallbackResult> {
    return await Taro.navigateTo({
        url: '/pages/views/BlogDetailView?id=' + id
    })
}

