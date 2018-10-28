import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastName: ''
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <form>
                    <div className="form_element">
                        <label>Enter a name</label>
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter a lastName</label>
                        <input 
                            type="text"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;