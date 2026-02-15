import { useContext, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MainContext from '../../context/MainContext'
import { TailSpin } from 'react-loader-spinner'
import './index.css'

const Home = () => {
    const { sortByOptions, totalItems, navigate } = useContext(MainContext)

    let newSortByOptions = []
    sortByOptions.map(item => (newSortByOptions = [item, ...newSortByOptions]))
    //console.log(newSortByOptions)
    const [sortValue, setSortValue] = useState(newSortByOptions[0].value)
    const [isLoader, setIsLoader] = useState(true)
    const [restaurantsList, setRestaurantsList] = useState([])
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)

    const limit = 9

    const fetchData = useCallback(async () => {
        const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortValue}`

        const jwtToken = Cookies.get('jwt_token')
        //console.log(jwtToken)
        const options = {
            method: 'GET',

            headers: {
                Authorization: `bearer ${jwtToken}`,
            },
        }

        const response = await fetch(url, options)
        const data = await response.json()
        // console.log(data)

        //const newData = []
        const restaurantsData = data.restaurants

        const newDataCheck = restaurantsData.map(item => ({
            id: item.id,
            costOfTwo: item.cost_for_two,
            cuisine: item.cuisine,
            groupByTime: item.group_by_time,
            hasOnlineDelivery: item.has_online_delivery,
            imageUrl: item.image_url,
            isDeliveringNow: item.is_delivering_now,
            location: item.location,
            menuType: item.menu_type,
            name: item.name,
            openAt: item.opens_at,
            userRating: item.user_rating,
        }))

        setRestaurantsList(newDataCheck)
        setTotal(data.total)
        setIsLoader(false)
    }, [offset, sortValue])

    useEffect(() => {
        fetchData()
    }, [fetchData])



    const onClickLeftArrow = () => {
        if (offset >= 10) {
            setOffset(offset - limit)
        }
    }
    const onClickRightArrow = () => {
        if (offset + limit < total && offset !== total) {
            setOffset(offset + limit)
        }
    }

    const onLoadingRender = () => {
        return (
            <div className="loader-container">
                <div>
                    <TailSpin color="#F7931E" width={32} height={32} />
                </div>
            </div>
        )
    }

    const onRenderCardItem = itemDetails => {
        const { name, id, imageUrl, cuisine } = itemDetails
        const newRatings = {
            rating: itemDetails.userRating.rating,
            totalReviews: itemDetails.userRating.total_reviews,
        }

        const { rating, totalReviews } = newRatings

        return (
            <Link to={`/restaurant/${id}`} className="li-item" key={id}>
                <div className="li-item-part-1">
                    <img src={imageUrl} alt={name} className="li-item-image" />
                </div>
                <div className="li-item-part-2">
                    <h1 className="li-item-part-2-name">{name}</h1>
                    <p className="li-item-part-2-title">{cuisine}</p>
                    <div className="li-item-rating-container">
                        <div className="rating-star-container">
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770660182/7_Rating_p98sxm.png"
                                alt="star"
                            />
                        </div>
                        <h1 className="rating-score">{rating}</h1>
                        <p className="ratings-count-h">({totalReviews} ratings)</p>
                    </div>
                </div>




            </Link>
        )
    }

    const popularRestaurants = () => {
        return (
            <div className="popular-container">
                <h1 className="popular-heading">Popular Restaurants</h1>

                <div className="md-sort-container">
                    <p className="popular-title">
                        Select Your favourite restaurant special dish and make your day
                        happy...
                    </p>

                    <div className="sort-container">
                        <div className="popular-sort-container">
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770654963/sort_eosmmy.png"
                                alt="sort-icon"
                            />

                            <div className="popular-sort-label-container">
                                <select
                                    className="popular-sort-label"
                                    value={sortValue}
                                    onChange={e => setSortValue(e.target.value)}
                                >
                                    {newSortByOptions.map(item => (
                                        <option
                                            className="popular-sort-option"
                                            key={item.id}
                                            value={item.value}
                                        >
                                            Sort by {item.displayText}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <ul className="ul-list-items">
                    {restaurantsList.map(item => (
                        <li key={item.id}> {onRenderCardItem(item)}</li>
                    ))}
                </ul>
                <div className="pages-filtering-container">
                    <div className="buttons-container">
                        <button
                            type="button"
                            onClick={onClickLeftArrow}
                            className="arrow-button-page"
                        >
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770662166/Chevron_Left_-_16px_fnlbvh.png"
                                alt="left"
                            />
                        </button>
                        <h1 className="pages-heading">
                            {offset + 1} of {total}
                        </h1>
                        <button
                            type="button"
                            className="arrow-button-page"
                            onClick={onClickRightArrow}
                        >
                            {' '}
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770662165/Chevron_Right_-_16px_dq5cjz.png"
                                alt="right"
                            />
                        </button>
                    </div>
                </div>


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
        <div>
            <Navbar />
            {isLoader ? onLoadingRender() : popularRestaurants()}
            <Footer />
        </div>
    )
}

export default Home
