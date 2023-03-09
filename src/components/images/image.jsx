import { Axios } from "axios";
import { useEffect, useRef, useState } from "react";
import Images from "./images";


export default function Images(){
const [images,setimages] = useState([]);

const inputRef = useRef(null);
const varRef = useRef(images.length);

useEffect(()=>{
    inputRef.current.focus();
    Axios.get('http://localhost:1337/api/best-sellers').then(res=>{
        console.log(res.data);
    });
},[]);

useEffect(()=>{
    varRef.current = varRef.current+1;
})
}

