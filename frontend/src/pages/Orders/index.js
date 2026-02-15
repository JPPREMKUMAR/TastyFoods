import { useContext } from "react"
import MainContext from "../../context/MainContext"
import Navbar from "../../components/Navbar"
import "./index.css"




const Orders = () => {
    const { ordersList } = useContext(MainContext)
    //console.log(ordersList)

    ordersList.reverse()


    const onRenderOrder = () => {

        return (


            <div className="orders-container">
                <h1 className="orders-heading">My Orders</h1>

                <ul className="order-list-items">

                    {
                        ordersList.map((item) => (
                            <li key={item.id} >
                                <div className="order-item">
                                    <p className="order-item-id">Order #000000</p>
                                    <p className="order-item-date-string">Order placed on {item.dateString}</p>
                                    <div className="order-details-container">
                                        <img src={item.imageUrl} alt={item.name} className="order-details-image" />

                                        <div className="order-details-headings-and-price-container">
                                            <div className="orders-headings-container-1">
                                                <h1 className="order-item-name">{item.name}</h1>
                                                <p className="orders-quntity-cost-paragraph">{item.quantity} x ₹ {item.cost} </p>

                                            </div>
                                            <div className="orders-headings-container-2">

                                                <h1 className="order-item-name">₹ {item.cost}</h1>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-details-headings-and-price-container">
                                        <div className="orders-headings-container-1">
                                            <h1 className="order-item-name">{item.paymentMethod}</h1>

                                        </div>
                                        <div className="orders-headings-container-2">

                                            <h1 className="order-item-name">₹ {item.cost * item.quantity}</h1>

                                        </div>
                                    </div>

                                </div>
                                <hr className="hr-line-new" />
                            </li>
                        ))
                    }
                </ul>

            </div >

        )
    }


    return (
        <>

            <Navbar />
            {onRenderOrder()}

        </>
    )
}



export default Orders