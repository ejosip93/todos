import React from "react";

class Item extends React.Component {
    render() {
        const minusButton = {
            borderRadius: "10px",
            backgroundColor: '#D3212D',
            border: '1px solid white',
            padding: '2px 8px'
        }
        const itemName = {
            flex: 'auto',
            fontWeight: 'bold',
            textDecoration: this.props.item.completed ? 'line-through' : 'none',
            display: 'inline-block'
        }
        return(
            <div style={{display: 'flex', padding: '5px'}}>
                <input style={{display: 'inline-block', marginTop: '5px'}} type="checkbox" checked={this.props.item.completed} onChange={this.props.toogleComplete.bind(this, this.props.item)}/>
                <span style={itemName}>{this.props.item.name}</span>
                <button style={minusButton} onClick={this.props.onDelete.bind(this, this.props.item.id)}>-</button>
            </div>
        );
    }
}

export default Item;
