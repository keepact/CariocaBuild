import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { Container, ProductTable, ClientContainer, Total } from './styles';

export default function Order() {
  const [product, setProduct] = useState([]);
  const [items, setItems] = useState([]);
  const [client, setClient] = useState([]);

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await api.get('/products/1');

        const data = response.data.items.map(p => ({
          ...p,
          priceFormatted: formatPrice(p.value),
        }));

        setProduct(response.data);
        setClient(response.data.client);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadItems();
  }, []);

  const orderPrice = formatPrice(
    items.reduce((total, p) => {
      return total + p.value * p.quantity;
    }, 0)
  );

  return (
    <Container>
      <h2>Detalhes do pedido #00{product.id}</h2>
      <ClientContainer>
        <span>
          <strong>Nome</strong>: {client.name}
        </span>
        <span>
          <strong>Telefone</strong>: {client.phone}
        </span>
        <span>
          <strong>Email</strong>: {client.email}
        </span>
      </ClientContainer>
      <ProductTable>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        {items.map(item => (
          <tbody key={item.name}>
            <tr>
              <td>
                <span>{item.name}</span>
              </td>
              <td>
                <span>{item.description}</span>
              </td>
              <td>
                <span>{item.quantity}</span>
              </td>
              <td>
                <span>{item.priceFormatted}</span>
              </td>
            </tr>
          </tbody>
        ))}
      </ProductTable>
      <footer>
        <Total>
          <span>Total</span>
          <strong>{orderPrice}</strong>
        </Total>
      </footer>
    </Container>
  );
}
