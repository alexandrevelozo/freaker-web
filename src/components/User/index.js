import React from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import {
  Wrapper,
  Container,
  ButtonsContainer,
  InfoContainer
} from './styles'

const User = ({
  data,
  buttons = true,
  selected,
  onDelete = () => {},
  onClick = () => {}
}) => {
  const history = useHistory()

  const handleNavigation = () => {
    let path = `/users/edit/${data.id}`
    history.push(path)
  }

  const handleDeleteUser = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja remover o usuário?')

    if (!confirm) return

    await api.delete(`/users/${id}`)

    onDelete(
      id
    )

    alert('Usuário removido com sucesso.')
  }

  return (
    <Wrapper selected={selected}>
      <Container selected={selected} buttons={buttons} onClick={onClick}>
        <InfoContainer>
          <span>
            <img src="/images/icons/user.svg" alt="Avatar do cliente" />
            {data.name}<label>#{data.id}</label>
          </span>

          <p>{data.address.street}, <span>{data.address.number}</span></p>
          <p>{data.address.neighborhood}</p>
          <p>{data.address.zipcode}</p>

          <p>{data.address.city} - <span>{data.address.state}</span></p>

          <p>{data.phone}</p>
        </InfoContainer>

        {
        buttons &&
          <ButtonsContainer>

              <button onClick={handleNavigation}>
                Editar
              </button>


            <button type="button" onClick={() => handleDeleteUser(data.id)}>
              Excluir
            </button>
          </ButtonsContainer>
        }
      </Container>
    </Wrapper>
  )
}

export default User
