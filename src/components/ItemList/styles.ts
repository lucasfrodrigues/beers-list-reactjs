import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 280px;
    min-height: 280px;
    padding: 20px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #505954;
    scale: 0.9;
    transition: all ease 0.2s;

    &:hover{
        scale: 1;
    }

    svg{
        align-self: flex-end;
        width: 25px;
        height: 25px;
        padding: 3px;
        border-radius: 50%;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all ease 0.2s;

        &:hover{
            background-color: #A8A8B3;
            color: #FFF;
        }
    }

    img{
        max-width:300px;
        max-height:250px;
        width: auto;
        height: auto;
        margin-bottom: 20px;
    }

    strong{
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
        color: #3D3D4D;
    }

    p{
        font-size: 14px;
        text-align: center;
        color: #A8A8B3;
        
    }
`;
