import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data.json';


class App extends React.Component {
constructor(props){
  super(props);
  this.state ={
  // title:"",
  // img:"",
  // description:"",
  beast: {},
  showModal: false,
  }
  }
  // handleClick = (title2, img2, description2) =>{
  //   this.setState({
  //     title: title2,
  //     img: img2,
  //     description: description2,
  //   })
  // }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      // title: title2,
      // img: img2,
      // description: description2,
      beast: beast,
    });
  };

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  };


  render() {
    return (
      <>
        <Header/>
        <Main
        data={data}
        handleShowModal={this.handleShowModal}
        // beast={this.state.beast}
        />
        <SelectedBeast 
        // title={this.state.title}
        // img={this.state.img}
        // description={this.state.description}
        beast={this.state.beast}
        handleShowModal={this.handleShowModal}
        show={this.state.showModal} 
        onHide={this.handleHideModal}
        />
        <Footer/>
        
         
        
      </>
    );
  }

}

export default App;