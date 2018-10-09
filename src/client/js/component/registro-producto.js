import React, { Component } from 'react'
import request from 'superagent'
import {Row, Input, Col, Button } from 'react-materialize'
import {uploadFile} from '../services/filestackService.js'



class RegistroProducto extends Component {
  constructor(...args){
      super(...args)
      this.state = {
        fileImg : 'http://labs.sogeti.com/wp-content/themes/wpex-tetris/images/default-image.png',
         theFile: null
      }
    }

  _handleSubmit(evt){
     evt.preventDefault()
     const formEl = evt.target
    uploadFile(this.state.theFile)
    .then(servicesRes =>{
      console.log('file from filestack');
      console.log(servicesRes);


    })

    }
_handleImgFileUpdate(e){
  e.preventDefault()
  const files = e.target.files;
  const file = files.item(0);
  console.log(file);

  let fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.addEventListener('load', (f)=>{
    this.setState({
      fileImg  : f.originalTarget.result,
      theFile: file

    })
  })

}





  render() {
    return (
      <div className="colormorado fondo">
            <div className="colorblanco cajaBlanca">
              <div className="color-form">
              <h1 className="colorGris tamaño center">Bienvenido</h1>
              <h2 className="colorGris tamaño center">Registra de producto</h2>
              <Row onSubmit={(e)=> this._handleSubmit(evt) } className="Form">
                <Input s={6, 12} label="Nombre del producto" />

                <Input s={6} label="Numero de piezas"  />

                <Input s={6} type='select' label="Materialize Select" defaultValue='2'>
                  <option value='1'>Farmacia</option>
                  <option value='2'>comestibles</option>
                  <option value='3'>otro</option>
                </Input>

                <Input  s={12} type='textarea'  label="Descripcion del proyecto" />
              </Row>

              <Row className="Form">
                <Col s={6,12}>
                  <Input type="file" label="File" s={12}  className="colorverde" onChange={ (evt) => {this._handleImgFileUpdate(evt) }} />
                </Col>
              </Row>
              <br/>

              <div s={12}  className=" Form" >
               <h4 className="colorGris  center" >Image Display</h4>
               <br/>
               <img className="materialboxed" width="550" src={this.state.fileImg}/>
             </div>

              </div>
              </div>
            </div>
    )
  }
}
export default RegistroProducto;
