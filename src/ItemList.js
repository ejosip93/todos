import React from "react";
import Item from "./Item";

class ItemList extends React.Component {

    render() {
        return this.props.listItem.map((item) =>
            <Item key={item.id} toogleComplete={this.props.toogleComplete} item={item} onDelete={this.props.onDelete}/>
        );
    }
}

export default ItemList;
