import { Text } from "@tarojs/components";
import { FC, ReactElement } from "react";
import {styled} from "@linaria/react";

interface IProps {
  text: string;
}

const Tag: FC<IProps> = ({ text }): ReactElement => {
  return <Container>{text}</Container>;
};

export default Tag;

const Container = styled(Text)`
  padding: 0 0.2rem;
  background: #f8f2f4;
  display: inline-block !important;
  border-radius: 6px;
  color: #b73650;
  font-size: 12px;
`;
