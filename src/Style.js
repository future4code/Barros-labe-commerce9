import styled from "styled-components"

export const Header=styled.header`
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: white;
    width:100%;
    height:8vw;
    gap: 30px ;


    h1{
    font-size: 2rem;
    font-weight: bold;
}
img{
    width:100px;
}
`

export const Main=styled.div`
    width:100%;
    height:40vw;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: gray;
    
    h1{
    font-size: 2rem;
    font-weight: bold;
}
`

export const Card=styled.div`
    width:100px;
    height: 100px;
    font-weight: bold;
    background-color: green;
    border: 1px black solid;
`


export const Footer=styled.footer`
    width:99.9%;
    height:4vw;
    background-color:pink;
    text-align:center;
    padding: 1px;
`