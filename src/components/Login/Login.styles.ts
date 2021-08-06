import { tokens } from "@theme/tokens";
import styled from "styled-components";

import { loginTheme } from "./Login.theme";

export const LoginContainer = styled.div`
  background-color: ${loginTheme.backgroundColor};
  width: ${tokens.sizes[444]};
  border: ${tokens.sizes[1]} solid ${loginTheme.borderColor};
  margin-left: auto;
  margin-right: auto;
  padding: ${tokens.sizes[10]};
  margin-top: 10%;
`;

export const Box = styled.div<{
  marginBottom?: keyof typeof tokens.sizes;
  marginTop?: keyof typeof tokens.sizes;
}>`
  margin-bottom: ${(p) => (p.marginBottom ? tokens.sizes[p.marginBottom] : 0)};
  margin-top: ${(p) => (p.marginTop ? tokens.sizes[p.marginTop] : 0)};
`;
