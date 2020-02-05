import React from "react";

class NewItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            itemName : ''
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.itemName);
        this.setState({itemName: ''});
    };

    onChange = (e) => {
        this.setState({itemName: e.target.value})
    };

    render(){

        const inputStyle = {
            borderRadius: '10px',
            padding: '5px',
            flex: 'auto',
            border: '2px solid grey',
            marginRight: '5px'
        };
        const submitStyle = {
            borderRadius: '25px',
            color: 'white',
            backgroundColor: '#091671',
            border: '1px solid white',
            padding: '5px 10px',
        };
        return(
            <form style={{display: 'flex', padding: '5px', justifyContent: 'space-between', margin: '1em auto'}} onSubmit={this.onSubmit}>
                <input style={inputStyle} value={this.state.itemName} onChange={this.onChange}/>
                <input type="submit" value="+" style={submitStyle}/>
            </form>
        );
    }
}

export default NewItem;
