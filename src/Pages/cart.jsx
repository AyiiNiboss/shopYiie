import { useSelector } from "react-redux"
import CartLayout from "../components/Layouts/CartLayout"
import Navbar from "../components/Fragments/Navbar"
import NavbarLayout from "../components/Layouts/NavbarLayout"
import FooterLayout from "../components/Layouts/FooterLayout"


const CartPage = () => {

    return (
        <>  
            <NavbarLayout />
            <CartLayout />
            <FooterLayout />
        </>
    )
}

export default CartPage