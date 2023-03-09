import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./item.css";
const Item = ({item})=>{
    const {addCartData}=useContext(CartContext);
    return(
        <>
        <section className="card">
            <img className="card-images" src={`http://localhost:1337${item?.images?.attributes?.url}`} alt="game"/>
            <article className="card-title">{item.title}</article>
            <article className="card-description">{item.description}</article>
            <section className="card-footer">
                <article className="price">Rs.{item.price}</article>
                <button className="cart-button" onClick={()=>{addCartData(item)}}>Add to Cart</button>
            </section>

        </section>
        </>
    )
}
export default Item;