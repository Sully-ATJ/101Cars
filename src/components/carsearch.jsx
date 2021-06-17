import React, {Component} from 'react';

//This is the car search component
//Here is suppose to be connected to the database
//so we can search for a car by selecting the model,
//brand, and gearbox type
//beside that is a div allocated for advertisents

class Cars extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            hits:[],
            isLoaded:true
        }
    }

    componentDidMount(){
        fetch('localhost:3001/api')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                hits:json,
                isLoaded:true,
            })
        });
    }

    render(){
        var{hits, isLoaded} = this.state;
            return (
                <div className="header1 container">
                    <h1>Find your dream car</h1>
                    <div className="row">
                        <div className="column">
                            <div className="row">
                                <select name="carbrand">
                                    <option>Car</option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="row">
                                <select name="carmodel">
                                    <option>Model</option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="row">
                                <select name="gearbox"> 
                                    <option>Gearbox</option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="column" id="ads">
                            Ad Space
                        </div>
                    </div>
                </div>
            );
    }
}





export default Cars;