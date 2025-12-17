import React from 'react';

function Card (props){
    return(
        <>
        <div className="card">
            <h3>Product Name: {props.data.productName}</h3>
            <h3>Product Description: {props.data.productDes}</h3>
        </div>
        </>
    )
}

export default Card;