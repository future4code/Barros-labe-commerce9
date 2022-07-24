
import React from 'react';
import { AreaCarrinho, Container, ContainerProd, Header } from './style'
import Filtros from './components/Filtros/Filtros';
import Card from './components/Card/Card';
import { listaDeProdutos } from './components/MockDeDados';
import { useState } from 'react';
import logo from './components/imgs/Logo/Logo.png'





function App() {
  
  const [valorMin, setValorMin] = useState(0)
  const [valorMax, setValorMax] = useState(1000)
  const [nomeProd, setNome] = useState('')
  const [prodCarrinho, setProdCarrinho] = useState([])
  

/* ---------------------------------LÓGICA PARA O GRID DOS PRODUTOS--------------------------------------- */

//Renderiza lista de produtos com filtro para buscar
  const gridDeProdutos = listaDeProdutos.filter((item) => {
  return item.price >= valorMin || valorMin === "" 
}).filter(item => {
  return item.price <= valorMax || valorMax === ""
}).filter(item => {
  return item.nome.toLowerCase().includes(nomeProd.toLowerCase())
}).map((item, index) => {
  return ( <Card key={index}
    foto={item.photo}
    nome={item.nome}
    preco = {item.price}
    funcaoAddProd = {() => {adicionarProduto(item.nome)}}
    >
    </Card>  
      )
})

/* --------------------------------- LÓGICA PARA O CARRRINHO  --------------------------------------- */

//botão adicionar ao carrinho
function adicionarProduto (itemAdd) {
  const carrinhoAtualizado = listaDeProdutos.filter((item)=>{
    console.log(itemAdd === item.nome)
    return itemAdd === item.nome
  })

  setProdCarrinho([...prodCarrinho, ...carrinhoAtualizado])
}

//botão remover do carrinho
function removerProduto (itemRemov) {
  const carrinhoAtualizado = prodCarrinho.filter((item) => {
    return itemRemov !== item.nome
  })
  setProdCarrinho(carrinhoAtualizado)
}

//renderiza o carrinho atualizado na lateral da tela
let novoCarrinho = prodCarrinho.map((item, index)=>{
  return (
    <ul key={index}>
      <li>{item.nome}</li>
      <li>{item.price}</li>
      <button onClick={() => removerProduto(item.nome)}>Remover</button>
    </ul>
  )
})

  return (
    <div>
        <Header>
          <img src={logo} alt='Imagem Logo'/>
          <p>E-COMMERCE</p>
        </Header>
        <Container>
          <Filtros
          valorMin = {valorMin}
          valorMax = {valorMax}
          nome = {nomeProd}
          setValorMin = {setValorMin}
          setValorMax = {setValorMax}
          setNome = {setNome}
          />
          <ContainerProd >
          {gridDeProdutos}
          </ContainerProd>
          <AreaCarrinho>
          <h1>Carrinho:</h1>
          {novoCarrinho}
          </AreaCarrinho>
        </Container>
    </div>
  
  );
}

export default App;