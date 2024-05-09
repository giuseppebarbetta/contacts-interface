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
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  const inputPhone = useRef();
  const inputName = useRef();

  async function addNewContact() {
    if (inputName.current.value === "" && inputPhone.current.value === "") {
      alert("Informe um telefone e um nome para concluir");
    } else if (
      inputName.current.value !== "" &&
      inputPhone.current.value === ""
    ) {
      alert("Informe um telefone para continuar");
    } else if (
      inputName.current.value === "" &&
      inputPhone.current.value !== ""
    ) {
      alert("Informe um Nome para concluir");
    } else {
      const { data: newContact } = await axios.post(
        "http://localhost:3001/contacts",
        {
          contactName: inputName.current.value,
          phone: inputPhone.current.value,
        }
      );

      console.log(newContact);
      setContacts([...contacts, newContact]);
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
        <Input ref={inputPhone} type="number" placeholder="011 123450 6789" />

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} type="text" placeholder="Maria Joaquina" />

        <Button onClick={addNewContact}> Novo Contato </Button>
        <Button goto={true} onClick={goToPage}>
          Todos Contatos
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
