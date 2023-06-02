import {Component} from 'react'
import {View} from '@tarojs/components'
import './category.less'

export default class CategoryIndex extends Component {

  state = {
  }

  /// 在这里请求服务器数据
  async componentDidMount() {
  }


  render() {
    return (
      <View className='index'>
        分类
      </View>
    )
  }
}
