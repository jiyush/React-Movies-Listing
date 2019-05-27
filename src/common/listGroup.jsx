import React from 'react';

const ListGroup = (props) => {
    const {items, textProperties, valueProperties, selectedItem, onItemSelect } = props;
    return <ul className="list-group">
        {
            items.map(item => (
                <li 
                    onClick={() => onItemSelect(item)} 
                    key={item[textProperties]} 
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}>{ item[valueProperties] }</li>
            ))
        }
    </ul>
}
 
export default ListGroup;