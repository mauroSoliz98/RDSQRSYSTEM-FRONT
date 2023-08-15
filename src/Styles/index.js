import styled from 'styled-components';
import {Space} from 'antd'

export const ButtonContainer = styled(Space)`
  @media (max-width: 767px) {
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`;