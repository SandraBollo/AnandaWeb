import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Producto extends Component {
  
  render() {
    return (
      <div className="wrapper">
          <div className="product-img">
            <img  className="img-product" src="https://images.eazeup.com/images/eaze-user-files-production/cb25cff3-67e4-4904-9e5f-00893abd2240_Jetty_Pure_White_Cart_Menu.jpg?preset=thumb" height="350" width="250"/>
          </div>
          <div className="product-info">
            <div className="product-text">
            <h1>Harvest Vase</h1>
            <h2>by studio and friends</h2>
            <p className="texto-info">Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original</p>
            <div className="product-price-btn">
            <button className="button2" ></button>
              <p> <span className="colorRosa spanboto"> $ 78</span></p>

            </div>
            </div>
          </div>
        </div>

    )
  }
}
export default Producto;
