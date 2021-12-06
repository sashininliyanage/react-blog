import styled from 'styled-components'

export const Image = styled.div`
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 80vh;
    min-height: 300px;
`;

export const Overlay = styled.div`
        display: flex;
        height: 100%;
        width: 100%;
        padding: 0 50px;
        background: rgba(0,0,0, 0.5);
        align-items: center;
        color: white;

        p{
            font-size: var(--fontSuperBig);

            @media screen and (max-width:500px){
                font-size: var(--fontMed);
            }
        }
`

