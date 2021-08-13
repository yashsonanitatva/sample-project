import {mq} from '@theme/mediaQueries';
import {tokens} from '@theme/tokens';
import styled from 'styled-components';

export const MainWrapper = styled.div``;

export const FormContainer = styled.div`
  width: ${tokens.sizes.full};
  margin-left: auto;
  margin-right: auto;
  padding: ${tokens.sizes[10]};

  ${mq(992)} {
    width: ${tokens.sizes[444]};
  }
`;
