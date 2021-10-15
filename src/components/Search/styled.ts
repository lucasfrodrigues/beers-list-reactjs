import styled from 'styled-components';

export const SearchArea = styled.section`

    height: 100px;
    margin-top: 80px;

    input[type='text'] {
        display: block;
        padding: 10px;
        font-size: 20px;
        border: 0;
        border-radius: 5px;
        width: 60%;
        margin: auto;
        outline: none;
    }

    @media (max-width: 820px) {
        input[type='text'] {
            width: 80%;
        }
    }
`;