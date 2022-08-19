import React from 'react';
import HornedBeast from './HornedBeast.js';
import Horns from './Horns.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';
// import data from './data.json';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howToSort: 0,
      filteredData: this.props.data
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.howToSort === 1) {
      let newData = this.props.data.filter(num => num.horns === this.state.howToSort);
      console.log(this.props.data);
      this.setState({ filteredData: newData });
    } else if (this.state.howToSort === 2) {
      let newData = this.props.data.filter(num => num.horns ===this.state.howToSort);
    this.setState({ filteredData: newData });
    } else if (this.state.howToSort === 3) {
      let newData = this.props.data.filter(num => num.horns ===this.state.howToSort);
    this.setState({ filteredData: newData });
    } else if (this.state.howToSort === 100) {
      let newData = this.props.data.filter(num => num.horns === this.state.howToSort);
    this.setState({ filteredData: newData });
    } else {
      this.setState({ filteredData: this.props.data });
    }
  };

  handleSelect = (e) => {
    let selected = parseInt(e.target.value);
    this.setState({
      howToSort: selected
    })
  }



  render() {
      let beastArr = this.state.filteredData.map((beast, indx) => {
   
      return (

        <HornedBeast
         key={indx}
        handleShowModal={this.props.handleShowModal}
        beast = {beast}
        />  
      );
    }
    );

    return(

        <main>
          <Horns
            sortData={this.props.data}
            handleSelect={this.handleSelect}
            handleSubmit={this.handleSubmit}
          />
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              {beastArr}
            </Row>
          </Container>
        </main>

      )
    }
  }

export default Main;