import { AreaCarrinho, Container, ContainerProd, Header } from './style'
import Filtros from './components/Filtros/Filtros';
import Card from './components/Card/Card';
import { listaDeProdutos } from './components/MockDeDados';
import { useState } from 'react';
import React, { useEffect } from 'react';
import logo from './components/imgs/Logo/Logo.png'


function App() {

  const [valorMin, setValorMin] = useState(0)
  const [valorMax, setValorMax] = useState(1000)
  const [nomeProd, setNome] = useState('')
  
  //State para armazear os produtos adicionados no carrinho e lógica para salvar e recuperar o localStorage ao recarregar a página
  const [prodCarrinho, setProdCarrinho] = useState(()=>{
    let storageCarrinho = localStorage.getItem("carrinho")
    let storageMeuCarrinho = JSON.parse(storageCarrinho)
    return storageMeuCarrinho || []
  })

  //Slava o array de objetos no localStorage
  useEffect(
    ()=>{
      localStorage.setItem("carrinho",JSON.stringify(prodCarrinho))
    },[prodCarrinho]
  )
  
/* ----------------LÓGICA PARA O GRID DOS PRODUTOS------------------ */

//Lógica para renderizar os produtos obedecendo os parâmetros dos filtros(inputs)
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
    funcaoAddProd = {() => {adicionarProduto(item.id)}}
    >
    </Card>  
      )
})

/* --------------------- LÓGICA PARA O CARRRINHO  --------------------------- */

//botão adicionar ao carrinho
function adicionarProduto (itemAdd) {
  //Lógica para encontrar se o item já está na lista
  const copiaCarrinho = [...prodCarrinho]
  const itens = copiaCarrinho.find((item) => item.id === itemAdd)

  //Mapeando o mock de dados e adicionando quantidade inicial igual a 1
  const novaLista = listaDeProdutos.map((item)=>{
    return {nome: item.nome, price: item.price, qtde: 1, id: item.id }
  })

  //Filtrando para adicionar ao carrinho
  const carrinhoAtualizado = novaLista.filter((item)=>{
      if(!itens){
        return itemAdd === item.id
      } else {
        return 0
      }
  })

   if (itens) {
    itens.qtde = itens.qtde + 1
   }
  setProdCarrinho([...prodCarrinho, ...carrinhoAtualizado])
  console.log(prodCarrinho)
}

//botão remover do carrinho
function removerProduto (itemRemov) {
  const carrinhoAtualizado = prodCarrinho.filter((item) => {
    return itemRemov !== item.id
  })
  setProdCarrinho(carrinhoAtualizado)
}

// Lógica para somar os produtos no carrinho
let arrPrecos = prodCarrinho.map((item)=> {
  return item.price * item.qtde
})

let somaCarrinho = arrPrecos.reduce((preco1, preco2) => {
  return preco1 + preco2
},0)


//renderiza o carrinho atualizado na lateral da tela
let novoCarrinho = prodCarrinho.map((item, index)=>{
  return (
    <>
    <ul key={index} id={item.id}>
      <li>{item.qtde}x</li>
      <li>{item.nome.substr(7, 25)}...</li>
      <li>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
      <button onClick={() => removerProduto(item.id)}>Remover</button>
    </ul>
    </>
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
      <p><strong>Total:</strong> {somaCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    </AreaCarrinho>
    </Container>
    </div>
  );
}

export default App;