import { Text } from "@tarojs/components";
import { setClipboardData, showToast } from "@tarojs/taro";
import { FC, ReactElement } from "react";
import {styled} from "@linaria/react";

interface ILink {
  text: string;
  src: string;
}

const copy = (data: string) => {
  setClipboardData({
    data,
    success: () => {
      showToast({
        title: "链接复制成功，请前往浏览器打开",
        duration: 1500,
        icon: "none"
      });
    }
  });
};

const Link: FC<ILink> = ({ text, src }): ReactElement => {
  return <Container onClick={() => copy(src)}>{text}</Container>;
};

export default Link;

const Container = styled(Text)`
  color: #00f;
  text-decoration: underline;
`;
