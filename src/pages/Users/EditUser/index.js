import React, { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'
import { Form } from '@unform/web'

import * as ROUTES from '../../../constants/routes'

import api from '../../../services/api'

import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Profile from '../../../components/Profile'
import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'

import { Wrapper, ButtonContainer } from './styles'

const EditUser = (props) => {
  const history = useHistory()

  const { id } = props.match.params
  const [user, setUser] = useState({
    name: String,
    address: {
      street: String,
      number: String,
      neighborhood: String,
      zipcode: String,
      city: String,
      state: String
    },
    phone: String
  })

  useEffect(() => {
    try {
      const getAsync = async () => {
        const { data } = await api.get(`/users/${id}`)
        setUser(data)
      }
      getAsync()
    } catch (err) {
      console.log(err)
    }
  }, [id]) // eslint-disable-line

  const stateInitial = {
    name: user.name,
    address: {
      street: user.address.street,
      number: user.address.number,
      neighborhood: user.address.neighborhood,
      zipcode: user.address.zipcode,
      city: user.address.city,
      state: user.address.state,
    },
    phone: user.phone
  }

  const handleUpdateUser = async (data) => {
    try {
      await api.put(`/users/${id}`, data)
      alert('Cliente atualizado com sucesso!')
      history.push(ROUTES.USERS)
    } catch(err) {
      alert('Não foi possível atualizar os dados do cliente!')
      console.log(err)
    }
  }

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Clientes" />

      <Form className="form" onSubmit={handleUpdateUser} initialData={stateInitial} >
          <h1>Editar cliente</h1>
          <p>Forneça os dados necessários para cadastrar um cliente</p>

        <Wrapper>
          <div>
            <label htmlFor="name">Nome do cliente</label>
            <Input
              type="text"
              name="name"
             />
          </div>

          <div className="grid">
            <div>
              <label htmlFor="street">Rua</label>
                <Input
                  type="text"
                  name="address.street"
                  />
            </div>

            <div></div>

            <div>
            <label htmlFor="number">Número</label>
                <Input
                  type="text"
                  name="address.number"
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="neighborhood">Bairro</label>
                <Input
                  type="text"
                  name="address.neighborhood"
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="zipcode">CEP</label>
                <Input
                  type="text"
                  name="address.zipcode"
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="city">Cidade</label>
                <Input
                  type="text"
                  name="address.city"
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="state">Estado</label>
                <Input
                  type="text"
                  name="address.state"
                />
            </div>
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <Input
              type="text"
              name="phone"
              />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Button
              icon="/images/icons/enter.svg"
              title="Atualizar dados"
            />
          </ButtonContainer>

        </Form>
      <Footer />
    </Container>
  )
}

export default EditUser
