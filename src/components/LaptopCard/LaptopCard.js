import React from "react";
import CardImg from "react-bootstrap/CardImg";
import Card from "react-bootstrap/Card";

import RatingBar from "./RatingBar/RatingBar"

const laptopCard = (p) => (
    <Card style={{width: "300px", height: "450px", paddingRight: "40px", margin: "15px"}}>
        <CardImg top style={{margin: "20px"}} src={p.product.image}
                 alt={p.product.name}/>
        <div className="card-body">
            <h6 className="card-title">{p.product.name}</h6>
            <div style={{paddingRight: "10px", fontSize: "12px"}} className="card-text">
                <p style={{margin: "-5px"}}>Processor: {p.product.processor}</p>
                <p style={{margin: "-5px"}}>Ram: {p.product.primaryStorage}</p>
                <p style={{margin: "-5px"}}>Diagonal: {p.product.diagonal}</p>
                <p style={{margin: "-5px"}}>Mon. type: {p.product.monitorType}</p>
                <p style={{margin: "-5px"}}>Disk type: {p.product.storageType}</p>
                <p style={{margin: "-5px"}}>Disk : {p.product.capacityStorage} GB</p>
                <p style={{margin: "-5px"}}>OS: {p.product.os}</p>
                <p style={{margin: "-5px"}}>Video Card: {p.product.videoCardName}</p>
                <p style={{margin: "-5px"}}>Price: {p.product.price}</p></div>
            <div style={{width: "100%", right: "10px"}}>
                <img style={{width: "30px", position: "absolute", right: "10px", bottom: "25px"}}
                     src={p.product.like === true ? "https://storage.cloud.google.com/cursove/icons/like-1.png" : "https://storage.cloud.google.com/cursove/icons/like-2.png"}
                     alt="image" onClick={() => p.onLike(p.product.id)}/>
                <RatingBar rating={p.product.rating} onRate={(rating) => p.onRating(p.product.id, rating)}/>
            </div>
        </div>

    </Card>
);

export default laptopCard;