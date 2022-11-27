import "./list.scss"
import Sidebar from "../../componenets/sidebar/Sidebar"
import Navbar from "../../componenets/navbar/Navbar"
import Datatable from "../../componenets/datatable/Datatable"
const List = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    )
}
export default List