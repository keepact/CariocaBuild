import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { Container, ProductTable, FiltersContainer } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

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

  const filteredData = products.filter(item => {
    return (
      item.client.name.toLowerCase().indexOf(filter) !== -1 ||
      item.date.includes(filter) ||
      item.priceFormatted.includes(filter)
    );
  });

  function handleChange(event) {
    setFilter(event.target.value);
  }

  return (
    <Container>
      <FiltersContainer>
        <div>
          <span>Data de ínicio</span>
          <input type="date" onChange={handleChange} />
        </div>
        <div>
          <span>Data de Término</span>
          <input type="date" onChange={handleChange} />
        </div>
        <div>
          <span>Nome do cliente</span>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <span>Valor mínimo</span>
          <input type="number" value={filter} onChange={handleChange} />
        </div>
      </FiltersContainer>
      <ProductTable>
        <thead>
          <tr>
            <th>Identificação</th>
            <th>Data do pedido</th>
            <th>Valor</th>
            <th>Cliente</th>
          </tr>
        </thead>
        {filteredData.map(product => (
          <tbody key={product.id}>
            <tr>
              <td>
                <Link to={`/order/${product.id}`}>
                  <span>#00{product.id}</span>
                </Link>
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
