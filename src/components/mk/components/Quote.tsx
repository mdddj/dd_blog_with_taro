import { View } from "@tarojs/components";
import { FC, ReactElement } from "react";
import { TypeComponent } from "..";
import {styled} from "@linaria/react";

interface IProps {
  child: any[];
}

const Quote: FC<IProps> = ({ child }): ReactElement => {
  return (
    <Container>
      {child.map(({ type, ...params }) => {
        const Component = TypeComponent[type];
        return <Component key={Math.random()} {...params} />;
      })}
    </Container>
  );
};

export default Quote;

const Container = styled(View)`
  border-left: 10px solid #dddfe3;
  padding: 0.5rem;
  width: 100%;
  background: #eef0f4;
  box-sizing: border-box;
  font-size: 24px;
`;
