import { useContext } from "react"
import MainContext from "../../context/MainContext"
import Navbar from "../../components/Navbar"
import "./index.css"

const Success = () => {


    const { navigate } = useContext(MainContext)


    const onRenderSuccess = () => {

        return (

            <>
                <Navbar />

                <div className="success-container">

                    <div className="success-image-container">
                        <img src="https://res.cloudinary.com/dokbp23jt/image/upload/v1771060287/check-circle.1_1_lh0u2t.png" alt="success" />
                    </div>
                    <div>
                        <h1 className="success-heading">Payment Successful</h1>
                        <p className="success-paragraph">Thank you for ordering Your payment is successfully completed.</p>

                    </div>
                    <div className="success-button-container">
                        <button type="button" className="success-button" onClick={() => navigate("/orders")} >Go To Orders</button>

                    </div>

                </div>

            </>
        )
    }

    return (

        <>

            {onRenderSuccess()}
        </>
    )
}


export default Success