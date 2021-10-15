import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: #28313d;
    box-shadow: 0px 3px 12px #505954;
    padding: 0 10px ;
`;

export const Content = styled.nav`
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 10px  0;

    img{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: #FFF;
        padding: 5px;
    }

    a{
        color: #FFF;
        margin-left: 10px;
        padding: 10px;
        transition: all ease 0.2s;

        &:hover, &.is-active{
            background-color: #FFF;
            color: #28313d;
            border-radius: 5px;
        }
    }

    
`;