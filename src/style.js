import styled from "styled-components";
import BackGround from './components/imgs/BackGround/BGespaco.gif'




export const Container = styled.main`
    display: flex;
    background-image: url(${BackGround});
`


export const ContainerProd = styled.section`
    display: grid;
    width: 50%;
    padding:20px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px 10px;   
`

export const CardProd = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;

    img {
        width: 100%;
        height: 100%;
    }

    p {
        margin: 0;
        text-align: center;
        font-weight: 600;
    }
`

export const AreaFiltos = styled.section`
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 100px 10px;
`

export const AreaCarrinho = styled.aside`
    width: 20%;
    display: flex;
    flex-direction: column;
    
`