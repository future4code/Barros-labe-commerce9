import React from "react";
import { AreaFiltros } from "../../style";

function Filtros (props) {

    return (
        <AreaFiltros>
        <label>
            Valor mínimo:
            <input type='number' value={props.valorMin} onChange={(e) => props.setValorMin(e.target.value)}></input>
        </label>
        <label>
            Valor máximo:
            <input type='number' value={props.valorMax} onChange={(e) => props.setValorMax(e.target.value)}></input>
        </label>
        <label>
            Busca por Nome:
            <input type='text' value={props.nome} onChange={(e) => props.setNome(e.target.value)}></input>
        </label>
        </AreaFiltros>
    )
}

export default Filtros