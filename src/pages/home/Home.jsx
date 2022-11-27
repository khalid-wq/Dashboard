

import Chart from "../../componenets/chart/Chart"
import Featured from "../../componenets/featured/Featured"
import Navbar from "../../componenets/navbar/Navbar"
import Sidebar from "../../componenets/sidebar/Sidebar"
import List from "../../componenets/table/Table"
import Widget from "../../componenets/widget/Widget"

import "./home.scss"
const Home = () => {
    return (
        <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>

            </div>
            <div className="listContainer">
                <div className="listTitle">Last Transaction</div>
                <List/>
            </div>
        </div>
        </div>
    )
}
export default Home