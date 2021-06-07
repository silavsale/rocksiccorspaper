import styled from 'styled-components';

export const Frame = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 20px;
  border: 3px solid lightblue;
  overflow:hidden;
  box-sizing:border-box;

  image { 
    height: 150px;
    width: 150px;
    filter: opacity(0.5) drop-shadow(0 0 0 blue);
   
    :hover {
      height: 149px;
      width: 149px;
    }
  }
`;
