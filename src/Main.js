import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import data from './data.json';


class Main extends React.Component {
  render() {
    let beastArr = [];
    data.forEach((beast) => {
    beastArr.push(<HornedBeast
    title = {beast.title}
    image_url = {beast.image_url}
    description = {beast.description}
    />);
    });
      return (
        <main>
         {beastArr}     
       </main>
    )
  }
}

export default Main;