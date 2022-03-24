import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
    display: flex;
    width: ${({ width }) => width ? width : 'auto'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
      ${({ flexDirection }) => flexDirection && css`
        flex-direction: ${flexDirection}
      `
      };
      ${({ flexWrap }) => flexWrap && css`
         flex-wrap: ${flexWrap}
      `
      };
      ${({ padding }) => padding && css`
         padding: ${padding}
      `
      };

      ${({ flexDirectionMobile }) => flexDirectionMobile && css`
            @media (max-width: 768px) {
                  flex-direction: ${flexDirectionMobile};
            }
      `
      };
`;

export const Title = styled.h1`
      font-size: ${({ size }) => size === 'big' ? '2.5rem' : '1.6rem'};
      font-weight: 500;
      text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};  
`;

export const Subtitle = styled.h2`
      font-size: ${({ size }) => size === 'big' ? '2.5rem' : '1.3rem'};
      font-weight: 500;
      margin: 0;
      padding-bottom: 10px;
`;
