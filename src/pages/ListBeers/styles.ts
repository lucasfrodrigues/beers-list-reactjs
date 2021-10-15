import styled from "styled-components";

export const ListItem = styled.div`
    max-width: 980px;
    margin: auto;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        
        grid-template-columns: 1fr;
        
    }
`;