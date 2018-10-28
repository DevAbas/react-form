import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const values = {
            name: this.name.value,
            lastName: this.lastName.value
        }

        console.log(values)
    }

    render(){
        return(
            <div>
                <form>
                    <div className="form_element">
                        <label>Enter a name</label>
                        <input 
                            type="text"
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter a lastName</label>
                        <input 
                            type="text"
                            ref={input => this.lastName = input}
                        />
                    </div>
                    <button onClick={this.onSubmitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;