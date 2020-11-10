import React from 'react'

import { Wrapper, Container, Price, GridSpan } from './styles'

const Product = ({
  data,
  selected,
  onClick
}) => {
  return (
    <Wrapper selected={selected}>
      <Container
        onClick={onClick}
        selected={selected}
      >
        <img
          src={data.images[0]}
          alt={data.name}
        />
        <span>{data.name}</span>

        <Price>
          <GridSpan>Preço de venda</GridSpan>
          <GridSpan>
            {data.sale_price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </GridSpan>
          <GridSpan>Preço de custo</GridSpan>
          <GridSpan>
            {data.cost_price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
          </GridSpan>
          <GridSpan>Estoque</GridSpan>
          <GridSpan>
            {data.stock} unidades
          </GridSpan>
        </Price>
      </Container>
    </Wrapper>
  )
}

export default Product
