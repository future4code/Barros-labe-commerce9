import React from 'react';
import { AreaCarrinho, Container, ContainerProd } from './style'
import Filtros from './components/Filtros/Filtros';
import Card from './components/Card/Card';
import { listaDeProdutos } from './components/MockDeDados';
import { useState } from 'react';


function App() {
  
  const [valorMin, setValorMin] = useState(0)
  const [valorMax, setValorMax] = useState(1000)
  const [nome, setNome] = useState('')
  const [prodCarrinho, setProdCarrinho] = useState([])
  

/* ---------------------------------LÓGICA PARA O GRID DOS PRODUTOS--------------------------------------- */

//Renderiza lista de produtos com filtro para buscar
  const gridDeProdutos = listaDeProdutos.filter((item) => {
  return item.price >= valorMin || valorMin === "" 
}).filter(item => {
  return item.price <= valorMax || valorMax === ""
}).filter(item => {
  return item.name.toLowerCase().includes(nome.toLowerCase())
}).map((item, index) => {
  return ( <Card key={index}
    foto={item.photo}
    nome={item.name}
    preco = {item.price}
    funcaoAddProd = {() => {addProduto(index)}}
    >
    </Card>  
      )
})

/* --------------------------------- LÓGICA PARA O CARRRINHO  --------------------------------------- */

//renderiza todos os produtos do mock
const todosProdutos = listaDeProdutos.map((item, index) => {
  return (
    <ul key={index}>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <button onClick={() => {removerProduto(index)}}>Remover</button>
    </ul>
  )
})

//adiciona produtos no carrinho
let carrinhoAtualizado = [];
function addProduto (itemAdd) {
  todosProdutos.map((item, index) => {
    if (index === itemAdd){
    return carrinhoAtualizado.push(item)
  }
    return 0
  })
  setProdCarrinho([...prodCarrinho, carrinhoAtualizado])
}

//Lógica para remover do carrinho
function removerProduto (indexRmv) {
  prodCarrinho.filter((item, index) => {
    return index !== indexRmv
  })
  setProdCarrinho([prodCarrinho])
}

  return (
    <Container>
      <Filtros
      valorMin = {valorMin}
      valorMax = {valorMax}
      nome = {nome}
      setValorMin = {setValorMin}
      setValorMax = {setValorMax}
      setNome = {setNome}
      />
      <ContainerProd >
      {gridDeProdutos}
      </ContainerProd>
      <AreaCarrinho>
      <h1>Carrinho:</h1>
    {prodCarrinho}
    </AreaCarrinho>
    </Container>
  );
}

export default App;
