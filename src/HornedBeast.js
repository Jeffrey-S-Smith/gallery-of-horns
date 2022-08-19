import React from "react";
import Col from 'react-bootstrap/Col';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  // helperClick = ()=>{
  //   this.props.handleShowModel(this.props.title, this.props.image_url, this.props.description);
  // }


  
  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  // handleShowModel=()=> {
  //   this.props.handleShowModel(this.props);
  // };
  
  render() {
    // ()=>this.props.handleShowModel(this.props.beast)
    return (
      <Col>
      <Card className="h-100" style={{ width: '18rem' }}>
      <Card.Img onClick={()=>this.props.handleShowModal(this.props.beast)} variant="top" src={this.props.beast.image_url} alt={this.props.beast.description}/>
      <p>💗{this.state.votes}</p>
      <p onClick={this.handleVotes}>Vote Here!</p> 
      <Card.Body>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Text>
        {this.props.beast.description}
        </Card.Text>
        {/* <p><Button variant="primary">Go somewhere</Button></p> */}
      </Card.Body>
    </Card>
    </Col>

      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>💗 {this.state.votes}</p>
      //   <img src={this.props.image_url} alt={this.props.description}/>
      //   <p>{this.props.description}</p>
      //   <p onClick={this.handleVotes}>Vote Here!</p> 
       
      // </article>
    )
  }
}

export default HornedBeast;