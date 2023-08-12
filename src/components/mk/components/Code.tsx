import { View, Text } from "@tarojs/components";
import { FC, ReactElement } from "react";
import {styled} from "@linaria/react";

interface ICode {
  text: string;
}

const Code: FC<ICode> = ({ text }): ReactElement => {
  return (
    <Container>
      <View>
        <Text userSelect>{text}</Text>
      </View>
    </Container>
  );
};

export default Code;

const Container = styled(View)`
  border-radius: 5px;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  overflow: scroll;

  & > view {
    padding: 12px;
    text {
      padding: 0.2rem;
    }
  }
`;
