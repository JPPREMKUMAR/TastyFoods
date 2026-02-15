import Navbar from "../../components/Navbar"
import "./index.css"




const Profile = () => {




    const onRenderProfile = () => {

        return (


            <>

                Profile
            </>

        )
    }


    return (
        <>

            <Navbar />
            {onRenderProfile()}

        </>
    )
}



export default Profile