import React from "react";
import CardImg from "react-bootstrap/CardImg";
import Card from "react-bootstrap/Card";


const recommendationCard = (p) => (
    <Card style={{width: "200px", height: "300px", paddingRight: "20px", margin: "7.6px"}}>
        <CardImg top style={{margin: "10px", height: "130px"}} src={p.product.image}
                 alt={p.product.name}/>
        <div className="card-body">
            <h6 className="card-title">{p.product.name.split(" ")[0]}</h6>
            <div style={{paddingRight: "6px", fontSize: "10px"}} className="card-text">
                <p style={{margin: "-4px", width: "200%"}}>Processor: {p.product.processor}</p>
                <p style={{margin: "-4px", width: "200%"}}>Ram: {p.product.primaryStorage}</p>
                <p style={{margin: "-4px", width: "200%"}}>Diagonal: {p.product.diagonal}</p>
                <p style={{margin: "-4px", width: "200%"}}>Mon. type: {p.product.monitorType}</p>
                <p style={{margin: "-4px", width: "200%"}}>Disk type: {p.product.storageType}</p>
                <p style={{margin: "-4px", width: "200%"}}>Disk : {p.product.capacityStorage} GB</p>
                <p style={{margin: "-4px", width: "200%"}}>OS: {p.product.os}</p>
                <p style={{margin: "-4px", width: "200%"}}>Video Card: {p.product.videoCardName}</p>
                <p style={{margin: "-4px", width: "200%"}}>Price: {p.product.price}</p></div>
        </div>
    </Card>
);

export default recommendationCard;