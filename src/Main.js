import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';
// import data from './data.json';


class Main extends React.Component {
  render() {
    let beastArr = this.props.data.map((beast,indx) => {
    return (<HornedBeast
    title = {beast.title}
    image_url = {beast.image_url}
    description = {beast.description}
    key={indx}
    handleShowModal={this.props.handleShowModal}
    beast = {beast}
        // heading={this.props.title}
        // img={this.props.img}
        // text={this.props.description}
        // beast={this.props.beast}
       
    />);
    });
      return (
        <main>
        <Container>
           <Row xs={1} sm={2} md={3} lg= {4}>
          {beastArr} 
          </Row>
         </Container>    
       </main>
    )
  }
}

export default Main;