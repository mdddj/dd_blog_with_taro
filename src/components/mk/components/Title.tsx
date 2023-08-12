import { Text } from "@tarojs/components";
import { FC, ReactElement } from "react";

interface ITitle {
  text: string;
  level: number; //h1 ~ h6
}

const Title: FC<ITitle> = ({ text, level }): ReactElement => {
  return (
    <Text
      style={{
        fontSize: `1.${6 - level}rem`,
        fontWeight: "bold",
        display: "block"
      }}
    >
      {text}
    </Text>
  );
};

export default Title;
