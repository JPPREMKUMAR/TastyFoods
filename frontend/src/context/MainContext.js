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




        localStorage.setItem("cartData", JSON.stringify(finalUpdatedList))
        setCartList(finalUpdatedList)

    }


    const clearCartList = () => {
        localStorage.removeItem("cartData", JSON.stringify([]))
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
            onSetOrdersList
        }}>

            {props.children}

        </MainContext.Provider>
    )
}


export default MainContext



