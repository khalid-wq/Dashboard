import "./sidebar.scss"
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>

                <span className="logo">Dashboard</span>
            </Link>
               </div>
            
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                
                <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardCustomizeRoundedIcon className="icon"/>
                    <span>Dashborad</span>
                    </li>
                    </Link>

                    <p className="title">LISTS</p>


                    <Link to="/users" style={{textDecoration:"none"}}>
                         <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    
                    <Link to="/products" style={{textDecoration:"none"}}>
                         <li>
                            <Inventory2OutlinedIcon className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
               
                <li>
                    <ReorderOutlinedIcon className="icon"/>
                    <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon"/>
                    <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyOutlinedIcon className="icon"/>
                    <span>SystemHealth</span>
                    </li>
                    <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                    </li>
                    <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                    <AccountBoxOutlinedIcon className="icon"/>
                    <span>Profile</span>
                    </li>
                    <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                    </li>
            </ul>
        </div>
        <div className="bottom"> 
        <div className="coloroption"></div>
        <div className="coloroption"></div>
        
        </div>
        </div>
    );
};
export default Sidebar