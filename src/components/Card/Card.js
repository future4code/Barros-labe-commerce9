import React from "react";
import { CardProd } from "../../style";


function Card (props) {
    return (
        <CardProd>
            <img src={props.foto} alt="capa de livro"></img>
            <p>{props.nome}</p>
            <p>{props.preco}</p>
            <button onClick = {props.funcaoAddProd}>Comprar</button>
        </CardProd>
    )
}

export default Card;