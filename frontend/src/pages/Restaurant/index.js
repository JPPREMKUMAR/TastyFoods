import { useEffect, useState, useContext, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { TailSpin } from 'react-loader-spinner'
import MainContext from '../../context/MainContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './index.css'

const Restaurant = props => {
    const location = useLocation()
    const splitPath = location.pathname.split('/')
    const restrauntId = splitPath[2]
    //console.log(restrauntId)
    const { cartList, newCartItem, onIncrementQuantity, onDecrementQunatity, totalItems, navigate } = useContext(MainContext)
    console.log(cartList, "cartlist restaurant")

    const [isLoader, setIsLoader] = useState(true)

    const [restaurantPresentItem, setRestaurantPresentItem] = useState({})

    const fetchRestaurantData = useCallback(async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/restaurants-list/${restrauntId}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `bearer ${jwtToken}`,
            },
        }
        const response = await fetch(url, options)
        const data = await response.json()
        //console.log(data)
        const updatedData = {
            id: data.id,
            costForTwo: data.cost_for_two,
            cuisine: data.cuisine,
            foodItems: data.food_items,
            imageUrl: data.image_url,
            itemsCount: data.items_count,
            location: data.location,
            name: data.name,
            opensAt: data.opens_at,
            rating: data.rating,
            reviewsCount: data.reviews_count,
        }

        //console.log(updatedData)
        setRestaurantPresentItem(updatedData)

        setIsLoader(false)
    }, [restrauntId])

    useEffect(() => {
        fetchRestaurantData()
    }, [fetchRestaurantData])

    const onLoadingRender = () => {
        return (
            <div className="loader-container">
                <div>
                    <TailSpin color="#F7931E" width={32} height={32} />
                </div>
            </div>
        )
    }

    const onRenderRestaurantItem = item => {
        //console.log(item)
        const newItem = {
            cost: item.cost,
            id: item.id,
            imageUrl: item.image_url,
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
        )
    }

    const onItemRender = () => {
        const {
            imageUrl,
            name,
            cuisine,
            location,
            rating,
            costForTwo,
            foodItems,
            reviewsCount,
        } = restaurantPresentItem
        //console.log(restaurantPresentItem)
        return (
            <div>
                <div className="item-banner-container">
                    <div className="item-banner-container-part-1">
                        <div className="item-banner-image-container">
                            <img
                                src={imageUrl}
                                alt={name}
                                className="item-banner-image-container-image"
                            />
                        </div>
                    </div>
                    <div className="item-banner-container-part-2">
                        <h1 className="part-2-heading">{name}</h1>
                        <p className="part-2-paragraph">{cuisine}</p>
                        <p className="part-2-paragraph">{location}</p>

                        <div className="item-banner-part-2-rating-container">
                            <div className="item-banner-part-2-rating-container-part1">
                                <div className="rating-container">
                                    <img
                                        src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770732461/7_Rating_nmkzrf.png"
                                        alt="7 start"
                                        className="start-icon"
                                    />
                                    <h1 className="rating-heading">{rating}</h1>
                                </div>
                                <div>
                                    <p className="ratings-count">{reviewsCount}+ Ratings</p>
                                </div>
                            </div>
                            <div className="item-banner-part-2-rating-container-part1">
                                <div className="rating-container">
                                    <h1 className="rating-heading">₹ {costForTwo}</h1>
                                </div>
                                <div>
                                    <p className="ratings-count">Cost Per Two</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="restaurants-list-items">
                    {foodItems.map(item => (
                        <li key={item.id}>
                            {onRenderRestaurantItem(item)}

                        </li>
                    ))}
                </ul>


                {
                    totalItems > 0 &&
                    <div className="home-view-cart-container">

                        <button
                            type="button"
                            className="view-cart-button"
                            onClick={() => navigate("/cart")}

                        >
                            View Cart<br />

                        </button>

                    </div>
                }
            </div>
        )
    }

    return (
        <>
            <Navbar />
            {isLoader ? onLoadingRender() : onItemRender()}
            <Footer />
        </>
    )
}

export default Restaurant
