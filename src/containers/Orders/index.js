import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TrashIcon from "../../assets/trash.svg";
import ordered from "../../assets/ordered.png";

import Titles from '../../components/Title';
import Button from '../../components/Button';
import Container from '../../components/Container';
import ContainerItems from '../../components/ContainerItems';

import {
  Image,
  Card,
  Order,
} from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders () {
        const { data: newOrders } = await axios.get("http://localhost:3001/orders")
        setOrders(newOrders)
    }

    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <ContainerItems>
      <Image alt="logo-delivery" src={ordered} />
        <Titles>Pedidos:</Titles>

        <ul>
          {orders.map((order) => (
            <Card key={order.id}>
              <Order>
                <p>{order.order}</p>
                <h5>{order.clientName}</h5>
              </Order>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="trash-logo" src={TrashIcon} />
              </button>
            </Card>
          ))}
        </ul>
        <Button isback={true} onClick={goBackPage}> Voltar </Button>
      </ContainerItems>
    </Container>
  );
}

export default Orders;
