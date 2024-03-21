import React, { useState, useRef } from "react";
import {useNavigate} from "react-router-dom";
import logoBurguer from "../../assets/burguer.png";
import axios from "axios";

import Titles from '../../components/Title';
import Button from '../../components/Button';
import Container from '../../components/Container';
import ContainerItems from '../../components/ContainerItems';

import {
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    if(inputName.current.value === "" && inputOrder.current.value === ""){
      alert("Informe seu Nome e Pedido para concluir")
    
    } else if (inputName.current.value !== "" && inputOrder.current.value === "") {
      alert("Informe um pedido para continuar")
    
    } else if (inputName.current.value === "" && inputOrder.current.value !== "") {
      alert("Informe seu Nome paara concluir o pedido")
    
    } else {
      const {data: newOrder }= await axios.post("http://localhost:3001/orders", {
      clientName: inputName.current.value,
      order: inputOrder.current.value,
    });

    console.log(newOrder)
    setOrders([...orders, newOrder])
    navigate('/orders')
    }
  }

  return (
    <Container>
      <ContainerItems>
        <Image alt="logo-burguer" src={logoBurguer} />
        <Titles> Faça seu Pedido </Titles>

        <InputLabel>Pedido:</InputLabel>
        <Input
          ref={inputOrder}
          placeholder="Ex: X-Bacon, 1 coca-cola, fritas grande"
        />

        <InputLabel>Nome do Cliente:</InputLabel>
        <Input ref={inputName} placeholder="Maria Joaquina" />

        <Button onClick={addNewOrder}> Novo Pedido </Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
