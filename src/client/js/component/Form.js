import React, { Component } from 'react'
import {Row, Input, Button, Col, Tag } from 'react-materialize'
class Forms extends Component {
  render() {
    return (
      <div className=" contenedor ContenedorProducto">
        <div className="cajaForm ">
        <img className="ImgLogoBlak" src="img/marijuana.png"/>
          <h5 className="colorGris">A  N  A  N D  A</h5>
          <Row>
          <Input s={6, 12} label="Nombre" />

          <Input s={12} label="Direccion"  />
          <Input type="email" label="Email" s={6} />
          <Input type="password" label="password" s={6} />
          <Input s={6} label="Telefono" />
          <br/>
          <Input s={12} name='group1' type='checkbox' value='red' label='aceptas terminos y condiciones'/>
        </Row>
        <Row className="Form">
          <Col s={6,12}>
            <Button className="center2" waves='light'>button</Button>
          </Col>
        </Row>
        </div>
      </div>
    )
  }
}
export default Forms;
