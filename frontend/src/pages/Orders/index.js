import Navbar from "../../components/Navbar"
import "./index.css"




const Orders = () => {




    const onRenderOrder = () => {

        return (


            <>

                Orders
            </>

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