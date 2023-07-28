import React from "react";
import {Image, View} from "@tarojs/components";

type ListTileProps = {
    title?: string,
    subTile?: string,
    image?: string,
    onClick?:()=>void
}

const ListTile: React.FC<ListTileProps> = ({title, subTile, image,onClick}) => {
    return <View className={'list-tile'} onClick={onClick}>
        {image && <Image className={'img'} src={image}/>}
        {title && <View className={'title'}>{title}</View>}
        {subTile && <View className={'subtitle clamp'}>{subTile}</View>}
    </View>
}
export default ListTile