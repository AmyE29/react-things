import React from 'react'

export default props => (
    <>
    <h1>Shoes</h1>
    <ul>
    {props.shoes.map(shoe => <ShoeItem key ={shoe.id} shoe = {shoe} onDelete ={props.onDelete}/>)}
    </ul>
    <ShoeForm onCreated = {props.onCreated}/>
    
    </>
)

function ShoeItem(props){
    return (
        <>
        <li>{props.shoe.name}
        <button onClick = {() => props.onDelete(props.shoe)}>delete me</button>
        </li>
        </>
    )
}

class ShoeForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            formItem: "",
        };
        this.createShoe = this.createShoe.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    createShoe(event){
        event.preventDefault();
        this.props.onCreated({name: this.state.formItem})
        
    }
    handleInputChange(event) {
      event.preventDefault()
  
      this.setState({
          formItem: event.target.value
        });
    }
    render() {
      return(
        <form onSubmit={this.createShoe}>
            <fieldset>
            <label>Add Shoe:</label>
            <input type="text" value={this.state.formItem} onChange={this.handleInputChange}/>
            <button>Add Shoe</button>
            </fieldset>
        </form>
      );
    }
}
