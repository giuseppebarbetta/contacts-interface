import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import agenda from "../../assets/closeAgenda.png";

import Titles from "../../components/Title";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ContainerItems from "../../components/ContainerItems";

import { Image, InputLabel, Input } from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewContact() {
    if (inputName.current.value === "" && inputOrder.current.value === "") {
      alert("Informe um telefone e um nome para concluir");
    } else if (
      inputName.current.value !== "" &&
      inputOrder.current.value === ""
    ) {
      alert("Informe um telefone para continuar");
    } else if (
      inputName.current.value === "" &&
      inputOrder.current.value !== ""
    ) {
      alert("Informe um Nome para concluir");
    } else {
      const { data: newContact } = await axios.post(
        "http://localhost:3001/contacts",
        {
          contactName: inputName.current.value,
          phone: inputOrder.current.value,
        }
      );

      console.log(newContact);
      setOrders([...orders, newContact]);
      navigate("/contacts");
    }
  }

  function goToPage() {
    navigate("/contacts");
  }

  return (
    <Container>
      <ContainerItems>
        <Image alt="agenda fechada azul" src={agenda} />
        <Titles> Adicione um contato </Titles>

        <InputLabel>Telefone:</InputLabel>
        <Input ref={inputOrder} placeholder="011 123450 6789" />

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Maria Joaquina" />

        <Button onClick={addNewContact}> Novo Contato </Button>
        <Button goto={true} onClick={goToPage}>
          {" "}
          Todos Contatos{" "}
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
