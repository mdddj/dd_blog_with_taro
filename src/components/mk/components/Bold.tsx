import { View } from "@tarojs/components";
import { FC, ReactElement } from "react";

interface IProps {
  text: string;
}

const Bold: FC<IProps> = ({ text }): ReactElement => {
  return <View style={{ fontWeight: "bold" }}>{text}</View>;
};

export default Bold;
