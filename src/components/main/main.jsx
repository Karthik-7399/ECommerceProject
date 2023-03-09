import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/header";
import Item from "../item/item";
import "./main.css";


const Main = ()=>{
    const[bestSeller, setBestSeller]=useState([]);
    const[oldSchool, setOldSchool]=useState([]);
    useEffect(()=>{
       axios.get('http://localhost:1337/api/best-sellers').then((bestSeller)=>{
              setBestSeller(bestSeller.data.data);
       }).catch(()=>{

       }).then(()=>{

       }).finally(()=>{

       })
       axios.get('http://localhost:1337/api/old-schools').then((oldSchool)=>{
            setOldSchool(oldSchool.data.data);
       }).catch(()=>{

       }).then(()=>{

       }).finally(()=>{
        
       })
    },[]);
    return (
        <>
        <Header/>
        <section>
           <article className="best-seller">Best Seller</article>
           {bestSeller.map((item,key)=>{
             return <Item item={item.attributes} />
           })}
           <article className="oldSchool">Old School</article>
           {oldSchool.map((item,key)=>{
             return <Item item={item.attributes} />
           })}
        </section>
        </>
    )
}
export default Main;