import { useContext } from "react"
import MainContext from "../../context/MainContext"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import FoodItem from "../../components/FoodItem"
import './index.css'

const Cart = () => {


    const { cartList,
        newCartItem,
        onIncrementQuantity,
        onDecrementQunatity,
        navigate,
        totalCartPrice,
        clearCartList } = useContext(MainContext)


    //console.log(cartList)






    const emptyCart = () => {
        return (
            <div>
                <Navbar />
                <div className="empty-container">
                    <div>
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770654195/cooking_1_do1zho.png"
                            alt="cart"
                        />
                    </div>
                    <h1 className="empty-heading">No Cart Items Yet!</h1>
                    <p className="empty-title">
                        Your cart is empty. Add something from the menu.
                    </p>
                    <div>
                        <button className="empty-button" type="button" onClick={() => navigate("/")}>
                            Go To Home Page
                        </button>
                    </div>
                </div>
            </div>
        )
    }




    const onRenderMdCartItem = (item) => {

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

        return (

            <div className="md-cart-titles-container">
                <div className="div-2">
                    <div>
                        <img src={imageUrl} alt={name} className="md-cart-image" />
                    </div>
                    <div className="md-cart-title-container">
                        <h1 className="li-item-heading-new">{name}</h1>


                    </div>
                </div>
                <div className="btn-container cart-md-title-center">
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
                <div className="cart-md-title-center">
                    <p className="md-cart-title-price">₹ {cost * cartItemPresent.quantity}.00</p>
                </div>

            </div>
        )
    }

    const onRenderCartList = () => {

        return (
            <>
                <Navbar />
                <ul className="restaurants-list-items-cart">
                    {cartList.map(item => (
                        <li key={item.id}>
                            <FoodItem item={item} />

                        </li>
                    ))}
                </ul>

                <ul className="md-cart-list">
                    <div className="md-cart-titles-container">
                        <div className="div-1">
                            <p className="md-cart-title">Item</p>
                        </div>
                        <div className="quantity-containter">
                            <p className="md-cart-title">Quantity</p>
                        </div>
                        <div className="div-1">
                            <p className="md-cart-title">Price</p>
                        </div>

                    </div>
                    {cartList.map(item => (
                        <li key={item.id}>
                            {onRenderMdCartItem(item)}

                        </li>
                    ))}
                </ul>


                <div className="coupons-container">

                    <input type="text" placeholder="Enter Code" className="coupon-input" />
                    <button type="button" className="coupon-button" >Apply</button>

                </div>

                <div className="order-detail-container">

                    <div className="cart-order-price-container">
                        <h1 className="cart-price-text">Subtotal :  </h1>
                        <h1 className="cart-price-text">₹ {totalCartPrice}.00</h1>
                    </div>


                    <div className="cart-order-price-container">
                        <p className="cart-price-text-delv">Delivery Fee :  </p>
                        <h1 className="cart-price-text">₹ 40.00</h1>
                    </div>
                    <hr className="hr-cart" />

                    <div className="cart-order-price-container">
                        <h1 className="cart-price-text">Total :  </h1>
                        <h1 className="cart-price-text-total">₹ {totalCartPrice + 40}</h1>
                    </div>
                    <hr className="hr-cart" />
                    <div className="cart-order-price-container">
                        <button type="button" className="cart-remove-button" onClick={clearCartList}>Clear Cart</button>
                    </div>

                    <div className="cart-order-button-container">
                        <button type="button" className="place-order-button" onClick={() => navigate("/payment")}>
                            Add Payment Method
                        </button>
                    </div>




                </div>


                <Footer />

            </>
        )
    }

    return <>

        {cartList.length === 0 ? emptyCart() : onRenderCartList()}

    </>
}

export default Cart
