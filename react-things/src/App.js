import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ShoesList from './ShoesList';
// import ShoeForm from './ShoesList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoes: []
        }

        this.createNewShoes = this.createNewShoes.bind(this);
        this.deleteShoes = this.deleteShoes.bind(this);
      }  
    createNewShoes(shoe){
        shoe.id = Date.now()
        this.setState({
          shoes: this.state.shoes.concat(shoe)
        })
        alert(shoe.name);
    } 
    deleteShoes(deletedShoe){
        const myShoes = this.state.shoes.filter(shoe => !shoe.id ===deletedShoe.id);

        this.setState({
          shoes : myShoes
        })
    }
    render(){
        return (
            <>
            <Header count = {this.state.shoes.length}/>
            <ShoesList shoes = {this.state.shoes}  onCreated={this.createNewShoes} onDelete = {this.deleteShoes}/>
            <Footer copyright = '© 2020 Amy Evans' />
            </>
      );
        }
    }
export default App;
