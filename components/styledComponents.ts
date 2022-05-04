import styled from 'styled-components';
import { FaAmilia } from "react-icons/fa";

type Props = {
  activeProps: boolean;
};
type Props2 = {
    activateicon: null | string;
};

export const Data = styled.h4<Props>`
  color: ${(props) => (props.activeProps ? 'red' : 'blue')};
`;





export const Icon = styled(FaAmilia)<Props2>`
  color: ${(props) => (props.activateicon ? 'red' : 'blue')};
`;
