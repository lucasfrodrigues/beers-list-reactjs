import { shade } from "polished";
import styled from "styled-components";


export const Container = styled.div`
    padding: 0 10px;
    margin: 80px auto;
    max-width: 600px;

`;

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    label{
        margin-bottom: 5px;
        color: #3D3D4D;
    }

    input[type=text]{
        margin-bottom: 20px; 
        padding: 10px;
        font-size: 20px;
        border: 0;
        border-radius: 5px;
        width: 100%;
        color: #3D3D4D;
        outline: none;
    }

    input[type=submit]{
        align-self: flex-end;
        width: 120px;
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        background-color: #50b56b;
        color: #FFF;
        cursor: pointer;

        &:hover{
            background-color: ${shade(0.2, '#50b56b')};
        }

    }
`;