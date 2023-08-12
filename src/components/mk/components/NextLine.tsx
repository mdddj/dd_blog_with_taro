import { View } from "@tarojs/components";
import { FC, ReactElement } from "react";

interface IProps {}

const NextLine: FC<IProps> = (): ReactElement => {
  return <View style={{ height: 10, width: "100%" }}></View>;
};

export default NextLine;
