import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Col, Card } from 'react-materialize'



const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}

const NoMatch404 = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>No Match - 404</h2>
}

import Nav from '../../component/nav.js';
// import Footer from './component/footer.js';
//////////////componentes/////////////////
// import About from './component/about.js';
// import Allproducts from './component/all-products.js';
// import Category from './component/category.js';
import Home from '../../component/home.js';
import Forms from '../../component/Form.js';
// import Terms from './component/terms.js';
// import Header from './component/header.js';
// import NoMatch404 from './component/NoMatch404.js';


class App extends React.Component {
  render(){
    return(
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/Home" component={Home} />
          <Route exact path="/form" component={Forms} />
        </Switch>

      </div>
    )
  }

}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));


// render (){
//   return
//   (
//     <div>
//       <div>
//         <Col m={6} s={12}>
//             <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
//             I am a very simple card.
//             </Card>
//         </Col>
//       </div>
//     <Switch>
//       <Route path='/ex/:routeVal' component={DynamicRoute}/>
//       <Route path='/demo' component={DemoComponent}/>
//       <Route component={NoMatch404}/>
//     </Switch>
//   </div>)
// }
