import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
const MainContext = React.createContext({ sortByOptions: [] })




export const MainContextProvider = (props) => {


    const sortByOptions = [
        {
            id: 0,
            displayText: 'Highest',
            value: 'Highest',
        },
        {
            id: 2,
            displayText: 'Lowest',
            value: 'Lowest',
        },
    ]



    const restaurantsStaticData = [
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Average",
                "rating_color": "CDD614",
                "total_reviews": 345,
                "rating": 3.4
            },
            "id": "2200043",
            "name": "Village Traditional Foods",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 700,
            "cuisine": "North Indian, Chinese",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/village-traditional-foods-2200043.jpg",
            "menu_type": "VEG",
            "location": "1-8-303, Sindhi Colony Rd, Sindhi Colony, Begumpet, Hyderabad, Telangana 500003",
            "opens_at": "10:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 461,
                "rating": 3.5
            },
            "name": "BHotel Akbar",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "North Indian, Chinese",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/b-hotel-akbar-2200044.jpg",
            "id": "2200044",
            "menu_type": "VEG",
            "location": "Metro Pillar Number KUK39, 1-10-74, 1st Floor, Above Balaji Family Dhaba Hotel",
            "opens_at": "09:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 111,
                "rating": 3.5
            },
            "name": "Hydarabad Spices",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 400,
            "cuisine": "Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/hydarabad-spices-2200033.jpg",
            "id": "2200033",
            "menu_type": "VEG",
            "location": "Parkview garden Appartments,Masabtank, Humayun Nagar, Hyderabad,",
            "opens_at": "10:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 94,
                "rating": 3.7
            },
            "name": "New Hotel Akbar",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/new-hotel-akbar-2200143.jpg",
            "id": "2200143",
            "menu_type": "VEG",
            "location": "K P H B Phase 6, Kukatpally, Hyderabad",
            "opens_at": "10:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 276,
                "rating": 3.8
            },
            "name": "Arunodaya Restuarent",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "North Indian, Chinese",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/arunodaya-restaurant-2200132.jpg",
            "id": "2200132",
            "menu_type": "VEG",
            "location": "NV Plaza, 4th Floor, Punjagutta Rd, Dwarakapuri, Punjagutta, Hyderabad",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 192,
                "rating": 3.8
            },
            "name": "Time Pass The Park Restaurent",
            "has_table_booking": 0,
            "location": "Hno. 1-98-9, plot no 23, Silicon Valley, Hyderabad,",
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/time-pass-the-park-restaurent-2200055.jpg",
            "id": "2200055",
            "menu_type": "NON-VEG",
            "opens_at": "10:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 71,
                "rating": 3.8
            },
            "name": "Come and Eat",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 400,
            "cuisine": "Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/come-and-eat-2200236.webp",
            "id": "2200236",
            "menu_type": "VEG",
            "location": " Srinivasa Nagar, Ameerpet, Hyderabad,",
            "opens_at": "11:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 206,
                "rating": 3.9
            },
            "name": "Hotel Sri Ganesh Bhavan",
            "cost_for_two": 200,
            "cuisine": "North Indian, Chinese",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/hotel-sriganesh-bhavan-2200045.jpg",
            "id": "2200045",
            "menu_type": "VEG",
            "location": "Fortune Enclave, Sri Ram Nagar Colony, Banjara Hills, ",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 140,
                "rating": 4.1
            },
            "name": "Cafe Madarassi",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 150,
            "cuisine": "Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/cafe-madarassi-2200153.jpg",
            "id": "2200153",
            "menu_type": "VEG",
            "location": "Dubai colony rode no:1 pradhan mantri kusal kendra 4th floor, Hyderabad,",
            "opens_at": "10:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Average",
                "rating_color": "CDD614",
                "total_reviews": 122,
                "rating": 3.4
            },
            "name": "Oyalo Pizza",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 800,
            "cuisine": "Street Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/oyalo-pizza-2200030.jpg",
            "id": "2200030",
            "menu_type": "VEG",
            "location": "Bachupally, Hyderabad",
            "opens_at": "02:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Average",
                "rating_color": "CDD614",
                "total_reviews": 44,
                "rating": 3.4
            },
            "name": "JayaSree Restaurant",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 600,
            "cuisine": "Street Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/jaya-sree-restaurant-2200149.jpg",
            "id": "2200149",
            "menu_type": "VEG",
            "location": "Somajiguda Beside Lane of Ford Car show Room, ",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Average",
                "rating_color": "CDD614",
                "total_reviews": 98,
                "rating": 3.4
            },
            "name": "Street Food Avenue",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1200,
            "cuisine": "Street Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/street-food-avenue-2200001.webp",
            "id": "2200001",
            "menu_type": "VEG",
            "location": " Sun Complex. Beside Airtel Office, opp. Indo English School, Santosh Nagar, Hyderabad,",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Average",
                "rating_color": "CDD614",
                "total_reviews": 26,
                "rating": 3.4
            },
            "name": "Kwality",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "Bakery",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/kwality-2200358.jpg",
            "id": "2200358",
            "menu_type": "VEG",
            "location": "Near, Ground Floor, Gowra Trinity, Police Lane, Passport Office Rd, Patigadda, ",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": false,
            "user_rating": {
                "rating_text": "Average",
                "rating_color": "CDD614",
                "total_reviews": 49,
                "rating": 3.4
            },
            "name": "Upper Crust",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 350,
            "cuisine": "Bakery",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/upper-crust-2300162.webp",
            "id": "2300162",
            "menu_type": "VEG",
            "location": "Balapur Basthi, Banjara Hills, Hyderabad,",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 91,
                "rating": 3.5
            },
            "name": "Kalasree Restaurent",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 300,
            "cuisine": "Street Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/kalasree-restaurent-2200067.webp",
            "id": "2200067",
            "menu_type": "VEG",
            "location": " SR Nagar Main Rd, Sanjeeva Reddy Nagar Office Area, Sanjeeva Reddy Nagar, Hyderabad,",
            "opens_at": "04:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 56,
                "rating": 3.6
            },
            "name": "Royal Spicy Foods",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 150,
            "cuisine": "Street Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/royal-spicy-foods-2200201.jpg",
            "id": "2200201",
            "menu_type": "VEG",
            "location": "Mehdipatnam, Hyderabad",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 51,
                "rating": 3.6
            },
            "name": "Mr.Ice Cream",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 700,
            "cuisine": "Bakery",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/mr-ice-cream-2200283.webp",
            "id": "2200283",
            "menu_type": "VEG",
            "location": "Street Number 6, Domalguda, Himayatnagar, Hyderabad,",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 97,
                "rating": 3.9
            },
            "name": "Mr Brown",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "Bakery",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/mr-brown-2300183.webp",
            "id": "2300183",
            "menu_type": "VEG",
            "location": "Addagutta Society - HMT Hills Rd, Kukatpally, Hyderabad,",
            "opens_at": "04:00 PM, Tomorrow",
            "group_by_time": true
        }
        , {
            "has_online_delivery": false,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 106,
                "rating": 3.6
            },
            "name": "Hotel Food World",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 850,
            "cuisine": "Desserts, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/hotel-food-world-2300003.webp",
            "id": "2300003",
            "menu_type": "VEG",
            "location": "Hitech City Rd, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad,",
            "opens_at": "09:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 34,
                "rating": 3.6
            },
            "name": "Atmosphere Grill Cafe Sheesha",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 150,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/atmosphere-grill-cafe-sheesha-2300497.webp",
            "id": "2300497",
            "menu_type": "NON-VEG",
            "location": "Metro Pillar Number KUK39, 1-10-74, 1st Floor, Above Balaji Family Dhaba Hotel,",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 160,
                "rating": 3.7
            },
            "name": "Aahgar Family Veg and Non Veg Restaurent",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1500,
            "cuisine": "Desserts, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/aahgar-family-veg-and-non-veg-restaurent-2300009.cms",
            "id": "2300009",
            "menu_type": "VEG",
            "location": "Mindspace Madhapur Rd, Mind Space, HITEC City, Hyderabad, ",
            "opens_at": "09:00 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 127,
                "rating": 3.9
            },
            "name": "ME Milkshakes Bakery",
            "has_table_booking": 0,
            "cost_for_two": 150,
            "cuisine": "Bakery",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/m-e-milkshakes-bakery-18312106.webp",
            "id": "18312106",
            "menu_type": "NON-VEG",
            "location": "The Grand Building, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": false,
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 113,
                "rating": 3.9
            },
            "name": "The Chicken Company",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 3000,
            "cuisine": "Desserts, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/the-chicken-company-2300187.webp",
            "id": "2300187",
            "menu_type": "NON-VEG",
            "location": "SR Nagar Main Rd, Sanjeeva Reddy Nagar Office Area, Hyderabad,",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "apikey": "b90e6a8c738410315a20c449fe2eb1b1",
            "user_rating": {
                "rating_text": "Good",
                "rating_color": "9ACD32",
                "total_reviews": 97,
                "rating": 3.9
            },
            "name": "Ice N Spice",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 400,
            "cuisine": "Desserts, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/ice-n-spice-2300065.jpg",
            "id": "2300065",
            "menu_type": "NON-VEG",
            "location": "near Post Office, Anand Nagar Colony, Khairtabad, Hyderabad,",
            "opens_at": "10:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 24,
                "rating": 4
            },
            "name": "Liquid",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1000,
            "cuisine": "Bakery",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/liquid-18377936.webp",
            "id": "18377936",
            "menu_type": "VEG",
            "location": "Post Office Rd, Megha Hills, Sri Sai Nagar, Madhapur, Telangana ",
            "opens_at": "04:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": false,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 41,
                "rating": 4
            },
            "name": "Barbeque Nation",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1400,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/barbeque-nation-18391601.webp",
            "id": "18391601",
            "menu_type": "NON-VEG",
            "location": "Srinivasa Nagar, Ameerpet, Hyderabad, ",
            "opens_at": "12:00 PM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": false,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 87,
                "rating": 4.1
            },
            "name": "Lassi Bistro",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 500,
            "cuisine": "Desserts, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/lassi-bistro-2300476.jpg",
            "id": "2300476",
            "menu_type": "NON-VEG",
            "location": "HUDA Techno Enclave, HITEC City, Hyderabad, ",
            "opens_at": "10:30 AM, Tomorrow",
            "group_by_time": true
        }, {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 54,
                "rating": 4
            },
            "name": "Royal Dine - Hotel Royal Cliff",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1500,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/royal-dine-hotel-royal-cliff-2300188.webp",
            "id": "2300188",
            "menu_type": "NON-VEG",
            "location": "Fortune Enclave, Sri Ram Nagar Colony, Banjara Hills, Hyderabad, Telangana ",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": false,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 158,
                "rating": 4.1
            },
            "name": "Little Chef",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1000,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/little-chef-2300018.jpg",
            "id": "2300018",
            "menu_type": "NON-VEG",
            "location": "indhi Colony Rd, Sindhi Colony, Begumpet, Hyderabad, Telangana",
            "opens_at": "09:30 AM, Tomorrow",
            "group_by_time": true
        },
        {
            "has_online_delivery": true,
            "user_rating": {
                "rating_text": "Very Good",
                "rating_color": "5BA829",
                "total_reviews": 155,
                "rating": 4.3
            },
            "name": "Broasted Friend Chicken (BFC)",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1500,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/broasted-friend-chicken-2300058.jpg",
            "id": "2300058",
            "menu_type": "NON-VEG",
            "location": "plot no 23, Silicon Valley, Hyderabad, Telangana 500081",
            "opens_at": "10:00 AM Tomorrow",
            "group_by_time": true
        }
    ]




    const navigate = useNavigate()

    const [cartList, setCartList] = useState([])
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [jwtToken, setJwtToken] = useState(undefined)
    const [totalItems, setTotalItems] = useState(0)
    const [optionValue, setOptionValue] = useState("Cash on Delivery")
    const [ordersList, setOrdersList] = useState([])



    const newCartItem = (item) => {
        //console.log(item)
        setCartList([...cartList, item])
    }

    useEffect(() => {
        const newList = JSON.parse(localStorage.getItem("cartData")) || []
        const newOrderList = JSON.parse(localStorage.getItem("ordersData")) || []
        setCartList(newList)
        setOrdersList(newOrderList)
        const token = Cookies.get("jwt_token")
        setJwtToken(token)

    }, [])

    useEffect(() => {
        //console.log("cart list updated")
        //console.log(cartList)
        if (cartList.length > 0) {
            localStorage.setItem("cartData", JSON.stringify(cartList))
        }
        let sumTotalPrice = 0
        for (let item of cartList) {

            const { quantity, cost } = item
            //console.log(quantity, cost)
            const price = quantity * cost
            //console.log(price)
            sumTotalPrice += price

        }
        //console.log("Total Price ", sumTotalPrice)
        setTotalCartPrice(sumTotalPrice)


        let countItems = 0;
        for (let item of cartList) {
            countItems += item.quantity
        }
        //console.log(countItems)

        setTotalItems(countItems)

        const newOrdersList = JSON.parse(localStorage.getItem("ordersData")) || []
        setOrdersList(newOrdersList)

    }, [cartList])



    const onIncrementQuantity = (newItem) => {
        //console.log(newItem)
        const { quantity, id, cost, imageUrl, name, rating } = newItem
        const updatedItem = {
            quantity: quantity + 1, id, cost, imageUrl, name, rating
        }
        //console.log(updatedItem)
        //const filterList = cartList.filter((val) => val.id !== newItem.id)
        //console.log(filterList)
        // const updateCartList = [...filterList, updatedItem]

        let finalUpdatedList = []
        for (let item of cartList) {
            if (item.id === newItem.id) {
                finalUpdatedList = [...finalUpdatedList, updatedItem]
            } else {
                finalUpdatedList = [...finalUpdatedList, item]
            }
        }



        localStorage.setItem("cartData", JSON.stringify(finalUpdatedList))
        setCartList(finalUpdatedList)
    }

    const onDecrementQunatity = (newItem) => {
        const { quantity, id, cost, imageUrl, name, rating } = newItem
        if (quantity !== 1) {
            const updatedItem = {
                quantity: quantity - 1, id, cost, imageUrl, name, rating
            }
            //console.log(updatedItem)
            //const filterList = cartList.filter((val) => val.id !== newItem.id)
            //console.log(filterList)
            // const updateCartList = [...filterList, updatedItem]
            //console.log(updateCartList)

            let finalUpdatedList = []
            for (let item of cartList) {
                if (item.id === newItem.id) {
                    finalUpdatedList = [...finalUpdatedList, updatedItem]
                } else {
                    finalUpdatedList = [...finalUpdatedList, item]
                }
            }



            localStorage.setItem("cartData", JSON.stringify(finalUpdatedList))
            setCartList(finalUpdatedList)
        }


    }


    const removeCartItem = (deleteItem) => {

        let finalUpdatedList = []

        for (let item of cartList) {
            if (deleteItem.id !== item.id) {
                finalUpdatedList = [...finalUpdatedList, item]
            }
        }




        localStorage.setItem("cartData")
        setCartList(finalUpdatedList)

    }


    const clearCartList = () => {
        localStorage.removeItem("cartData")
        setCartList([])
        navigate("/")
        setTotalItems(0)

    }


    const getPresentDateAndTime = () => {

        const newDate = new Date()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //const dateString = newDate.getDate()
        //console.log(dateString)
        const hours = newDate.getHours() % 12
        const hoursString = newDate.getHours() >= 12 ? "PM" : "AM"
        const minutes = newDate.getMinutes()
        const day = newDate.getDate()
        const month = newDate.getMonth()
        const year = newDate.getFullYear()
        //console.log(months[month], "month")
        //console.log(day, "day")
        //console.log(year, "year")
        const finalDateString = `${months[month]} ${day}, ${year} at ${hours}:${minutes} ${hoursString} `
        //console.log(finalDateString)

        return finalDateString

    }




    const onSetOrdersList = () => {

        const date = getPresentDateAndTime()

        const updatedCartList = cartList.map((item) => (
            {
                id: item.id,
                cost: item.cost,
                imageUrl: item.imageUrl,
                quantity: item.quantity,
                name: item.name,
                rating: item.rating,
                paymentMethod: optionValue,
                dateString: date
            }
        ))



        const newOrdersList = [...ordersList, ...updatedCartList]
        localStorage.setItem("ordersData", JSON.stringify(newOrdersList))
        setOrdersList(newOrdersList)
        setOptionValue("Cash on Delivery")
        clearCartList()
    }


    return (

        <MainContext.Provider value={{
            name: "premkumar",
            sortByOptions,
            navigate,
            cartList,
            newCartItem,
            onIncrementQuantity,
            onDecrementQunatity,
            totalCartPrice,
            jwtToken,
            setJwtToken,
            removeCartItem,
            clearCartList,
            totalItems,
            optionValue,
            setOptionValue,
            ordersList,
            onSetOrdersList,
            restaurantsStaticData
        }}>

            {props.children}

        </MainContext.Provider>
    )
}


export default MainContext



