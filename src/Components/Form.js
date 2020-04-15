import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name:'',
        numOfVisits: '',
        date:'',     
        
    }
    state = this.initialState;

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })

    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, date, numOfVisits} = this.state;
        const listOfMenu = {
                     "dishes": [{ "id": 1, "name": "Biryani" }, 
                                { "id": 2, "name": "Dal Tadka" }, 
                                { "id": 3, "name": "Khichdi" },
                                { "id": 4, "name": "Paneer Tikka"},
                                { "id": 5, "name": "Mix Paratha"},
                                { "id": 6, "name": "Pizza"},
                                { "id": 7, "name": "Bhindi Masala"},
                                { "id": 8, "name": "Gobi Paratha"},
                                { "id": 9, "name": "Noodles"},
                                { "id": 10, "name": "Fried Rice"},]
                   }
        
        return (
            <form>
                 
                 
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange}></input>
                <label htmlFor="numOfVisits">Number of Visits</label>
                <input type="number" name="numOfVisits" id="numOfVisits" value={parseInt(numOfVisits)} onChange={this.handleChange}></input>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" value={date} onChange={this.handleChange}></input>

                <label htmlFor="dishes">Select Dishes</label>
                <div className="dishNames">

                {listOfMenu.dishes.map((item, i) => {

                  return <ul><li key={i}>
                    <input type="checkbox" name="dishName" id="dishName" onChange={this.handleChange} value={item.name}></input>{item.name}
                    </li></ul>
                })}

                </div>
               
                


                <input type="button" value="Add Visit" onClick={this.submitForm} />



            </form>
        )
    }
}

export default Form;
