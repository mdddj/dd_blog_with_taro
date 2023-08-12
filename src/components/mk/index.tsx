

import { View } from "@tarojs/components";
import { FC, ReactElement, useEffect, useState } from "react";
import Code from "./components/Code";
import Title from "./components/Title";
import Image from "./components/Image";
import Text from "./components/Text";
import Link from "./components/Link";
import NextLine from "./components/NextLine";
import Quote from "./components/Quote";
import Bold from "./components/Bold";
import Tag from "./components/Tag";
import {styled} from "@linaria/react";

interface IProps {
  children: string;
}

export const TypeComponent = {
  code: Code,
  text: Text,
  img: Image,
  link: Link,
  title: Title,
  nextLine: NextLine,
  quote: Quote,
  bold: Bold,
  tag: Tag
};

function parseStr(tree: any, str: string) {
  // 代码块
  let result = str.match(/^```[\S]+\n(([\s|\S](?!\n```))*)(```)?/);
  if (result) {
    // let str = result[0]
    // const regex = /^([^\n\r]+)/;
    // const match = str.match(regex);
    // const firstLine = match ? match[1] : "";
    // let l = firstLine.replace("```","")
    // console.log(l)
    tree.push({
      type: "code",
      text: result[1] + str[result[0].length] //\n```结束标记前一个字符匹配不到 所以给拼接上
    });
    return parseStr(tree, str.slice(result[0].length + 5));
  }
  //标题 h1～h6
  result = str.match(/^(#{1,6}) (.+)/);
  if (result) {
    tree.push({
      type: "title",
      text: result[2],
      level: result[1].length
    });
    return parseStr(tree, str.slice(result[0].length));
  }
  //链接
  result = str.match(/^\[([\s|\S][^\]]*)\]\(([\S][^\)]*)\)/);
  if (result) {
    tree.push({
      type: "link",
      text: result[1],
      src: result[2]
    });
    return parseStr(tree, str.slice(result[0].length));
  }
  //图片
  result = str.match(/^!\[([\s|\S][^\]]*)\]\(([\S][^\)]*)\)/);
  if (result) {
    tree.push({
      type: "img",
      alt: result[1],
      src: result[2]
    });
    return parseStr(tree, str.slice(result[0].length));
  }
  //换行
  result = str.match(/^\n/);
  if (result) {
    tree.push({ type: "nextLine" });
    return parseStr(tree, str.slice(result[0].length));
  }
  //引用
  result = str.match(/^>(.*)/);
  if (result) {
    const child = [];
    parseStr(child, result[1]);
    if (result[1]) {
      //有时只有一个 >  这时不渲染
      tree.push({
        type: "quote",
        child
      });
    }
    return parseStr(tree, str.slice(result[0].length + 1)); //加1 是为了去掉结尾的\n
  }
  result = str.match(/^\*\*(?!\s)(.*)\*\*/); // 加粗 **xxx**
  if (result) {
    tree.push({ type: "bold", text: result[1] });
    return parseStr(tree, str.slice(result[0].length));
  }
  result = str.match(/^`(.*)`/); // 标签 `xxx`
  if (result) {
    tree.push({ type: "tag", text: result[1] });
    return parseStr(tree, str.slice(result[0].length));
  }
  //! 优先级要低
  result = str.match(/.[^\[|\*|`|>|!|\s]*/);
  if (result) {
    tree.push({ type: "text", text: result[0] });
    return parseStr(tree, str.slice(result[0].length));
  }
}
// result = str.match(/.+/); // 普通文本 遇到换行符结束

const MarkDownParse: FC<IProps> = ({ children }): ReactElement => {
  const [mdTree, setMdTree] = useState<any>([]);

  useEffect(() => {
    const vTree: any = [];
    parseStr(vTree, children);
    // console.log("tree:", vTree);
    setMdTree(vTree);
  }, [children]);

  return (
    <Container>
      {mdTree.map(({ type, ...params }) => {
        const Component = TypeComponent[type];
        return <Component key={Math.random()} {...params} />;
      })}
    </Container>
  );
};

export default MarkDownParse;

const Container = styled(View)`
  overflow: hidden;
`;