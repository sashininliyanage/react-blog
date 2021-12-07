import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 9;

    .customStyles{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`
