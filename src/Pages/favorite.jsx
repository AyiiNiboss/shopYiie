import FavoriteLayout from "../components/Layouts/FavoriteLayout"
import FooterLayout from "../components/Layouts/FooterLayout"
import NavbarLayout from "../components/Layouts/NavbarLayout"

const FavoritePage = () => {
    return(
        <>  
            <NavbarLayout />
            <FavoriteLayout />
            <FooterLayout />
        </>
    )
}

export default FavoritePage