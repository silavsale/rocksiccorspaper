import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    box-shadow: inset 0 0 8px #f9f8fc;
    text-shadow: 0 0 2px rgba(0,0,0,.3);

    box-shadow:
        inset 0 0 2px 0 rgba(255,255,255,.4),
        inset 0 0 3px 0 rgba(0,0,0,.4),
        inset 0 0 3px 5px rgba(0,0,0,.05),
        2px 2px 4px 0 rgba(0,0,0,.25);

    :hover{
        box-shadow: 0 0 8px rgb(207, 207, 207);
    } 

`;
