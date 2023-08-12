import { Text as TText } from "@tarojs/components";
import { FC, ReactElement } from "react";

interface IProps {
  text;
}

const Text: FC<IProps> = ({ text }): ReactElement => {
  return <TText userSelect>{text}</TText>;
};

export default Text;
