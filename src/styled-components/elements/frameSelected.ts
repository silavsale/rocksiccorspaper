import styled from 'styled-components';

export const FrameSelected = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 20px;
  border: 3px solid lightblue;
  overflow:hidden;
  box-sizing:border-box;

  image { 
    height: 150px;
    width: 150px;

    :hover {
      height: 149px;
      width: 149px;
    }
  }
`;
