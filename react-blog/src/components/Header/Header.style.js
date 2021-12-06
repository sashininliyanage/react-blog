import styled from 'styled-components'

export const Image = styled.div`
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
    height: 80vh;
    min-height: 300px;
   
    .overlay{
        height: 100%;
        width: 100%;
        background: rgba(0,0,0, 0.5);
    }
`;

