import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TrashIcon from "../../assets/trash.svg";
import openAgenda from "../../assets/openAgenda.png";

import Titles from "../../components/Title";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ContainerItems from "../../components/ContainerItems";

import { Image, Card, Contact } from "./styles";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newContacts } = await axios.get(
        "http://localhost:3001/contacts"
      );
      setContacts(newContacts);
    }

    fetchOrders();
  }, []);

  async function deleteOrder(contactId) {
    await axios.delete(`http://localhost:3001/contacts/${contactId}`);
    const newContacts = contacts.filter((contact) => contact.id !== contactId);

    setContacts(newContacts);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <ContainerItems>
        <Image alt="agenda aberta azul" src={openAgenda} />
        <Titles>Contatos:</Titles>

        <ul>
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <Contact>
                <p>{contact.phone}</p>
                <h5>{contact.contactName}</h5>
              </Contact>
              <button onClick={() => deleteOrder(contact.id)}>
                <img alt="trash-logo" src={TrashIcon} />
              </button>
            </Card>
          ))}
        </ul>
        <Button isback={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default Contacts;
