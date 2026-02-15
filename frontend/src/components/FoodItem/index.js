
import { useContext } from "react"
import MainContext from '../../context/MainContext'
import "./index.css"


const FoodItem = (props) => {
    const { cartList, newCartItem, onIncrementQuantity, onDecrementQunatity, removeCartItem } = useContext(MainContext)

    const { item } = props





    const onRenderRestaurantItem = () => {
        //console.log(item)
        const newItem = {
            cost: item.cost,
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            rating: item.rating,
        }
        const { cost, id, imageUrl, name, rating } = newItem

        const onClickAddToCart = () => {
            //console.log('Add cart Button Clicked', id)
            //console.log(newItem)
            const cartItem = {
                cost, id, imageUrl, name, rating, quantity: 1
            }
            newCartItem(cartItem)
        }

        const isItem = cartList.filter((val) =>
            val.id === newItem.id
        )
        //console.log(isItem, "is Present")
        let cartItemPresent;
        if (isItem.length > 0) {
            cartItemPresent = isItem[0]
        }

        const onClickRemove = () => {
            // console.log("remove Item ")
            removeCartItem(newItem)
        }


        return (
            <>
                <div className="li-item-res res-item">
                    <div className="li-item-part-1-res">
                        <img src={imageUrl} alt={name} className="li-item-image-res" />
                    </div>
                    <div className="li-item-part-2-res">
                        <h1 className="li-item-heading-new">{name}</h1>
                        <p className="li-item-paragraph-new">₹{cost}.00</p>
                        <div className="ratings-star-con">
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770660182/7_Rating_p98sxm.png"
                                alt="start"
                            />
                            <span>{rating}</span>
                        </div>
                        <div className="btn-container">
                            {
                                cartItemPresent === undefined ?
                                    <button
                                        type="button"
                                        className="add-button"
                                        onClick={onClickAddToCart}
                                    >
                                        Add
                                    </button> : <div className="inc-dec-container">
                                        <button type="button" className="inc-button" onClick={() => onDecrementQunatity(cartItemPresent)}  >
                                            <img src="https://res.cloudinary.com/dokbp23jt/image/upload/v1771006764/Minus_e9hq51.png" alt="minus" className="btn-image" />
                                        </button>
                                        <span className="quantity-text">{cartItemPresent.quantity}</span>


                                        <button type="button" className="inc-button" onClick={() => onIncrementQuantity(cartItemPresent)}>
                                            <img src="https://res.cloudinary.com/dokbp23jt/image/upload/v1771006765/add_t7ojug.png" alt="plus" className="btn-image" />
                                        </button>
                                    </div>
                            }


                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className="cart-remove-button" onClick={onClickRemove} >Remove</button> <span> | </span>
                    <button type="button" className="cart-remove-button">Save for Later</button>

                </div>
            </>

        )
    }

    return (
        <>

            {onRenderRestaurantItem()}
        </>
    )
}


export default FoodItem