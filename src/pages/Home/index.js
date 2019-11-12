import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { Container, ProductTable } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.value),
        dateFormatted: format(parseISO(product.date), "dd'/'M/Y"),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>Identificação</th>
            <th>Data do pedido</th>
            <th>Valor</th>
            <th>Cliente</th>
          </tr>
        </thead>
        {products.map(product => (
          <tbody key={product.id}>
            <tr>
              <td>
                <span>#00{product.id}</span>
              </td>
              <td>
                <span>{product.dateFormatted}</span>
              </td>
              <td>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <span>{product.client.name}</span>
              </td>
            </tr>
          </tbody>
        ))}
      </ProductTable>
    </Container>
  );
}
