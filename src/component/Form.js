import React, { Component } from 'react'
import {Row, Input} from 'react-materialize'
class Forms extends Component {
  render() {
    return (
      <div className="color-form">
      <h1 className="colorGris tamaño center">A  N  A  N D  A </h1>
      <h2 className="colorGris tamaño center">Comienza a vender</h2>
      <Row className="Form">
        <Input s={6, 12} label="Nombre" />

        <Input s={12} label="Direccion"  />
        <Input type="email" label="Email" s={6} />
        <Input type="password" label="password" s={6} />
        <Input s={6} label="Telefono"  />

      </Row>
      </div>
    )
  }
}
export default Forms;
