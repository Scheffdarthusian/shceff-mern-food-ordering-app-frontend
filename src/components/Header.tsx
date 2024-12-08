import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return(
        <div className="py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                to="/" 
                className="text-2xl font-medium tracking-tight text-orange-500">
                    <span className="text-2xl font-medium text-gray-800">Scheff</span> Eats
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    )
}

export default Header;