import { Image as TImage } from "@tarojs/components";
import { FC, ReactElement } from "react";
import {styled} from "@linaria/react";

interface IImage {
  alt: string;
  src: string;
}

const Image: FC<IImage> = ({src }): ReactElement => {
  return <Container src={src} />;
};

export default Image;

const Container = styled(TImage)`
  width: 100%;
`;
