import styled from 'styled-components';
export const Name=styled.span`
     font-size: ${(props) => props.main ? '65px' : '56px'};
  background: -webkit-linear-gradient(#f70552, pink);
  background-clip:text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
