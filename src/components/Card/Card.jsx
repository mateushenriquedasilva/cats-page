import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container } from "./Styles";

export default function Card(){

    const [urlImage, setUrlImage] = useState([])
    const [reload, setReload] = useState(true)

    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/images/search`)
            .then((resp) => setUrlImage(resp.data[0].url))
            .catch((err) => console.log(err))
    },[reload]);

    return(
        <Container>
            <img src={urlImage} alt="cats pictures" />
            <button onClick={() => {
                reload === true ? setReload(false) : setReload(true)
            }}>Nova Imagem</button>
        </Container>
    );
}
