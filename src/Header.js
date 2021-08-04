import {FaSearch} from "react-icons/fa"

const Header = () => {
    return ( 
        <>
            <div className="container flex items-start pt-4 justify-between mx-4 my-2
            mx-auto">
                <div className="left ml-12">
                <h2>Claire</h2>
                </div>
                <div className="right pr-8 flex items-center space-x-8">
                    <a href="" className="hover:text-gray-600">Home</a>
                    <a href="" className="hover:text-gray-600">About</a>
                    <a href="" className="hover:text-gray-400"><FaSearch /></a>
                </div> 
            </div>
           
        </>
     );
}
 
export default Header;