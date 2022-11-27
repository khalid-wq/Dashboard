import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <TranslateOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <NightlightOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsActiveOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">2</div>
                    </div>
                   
                    <div className="item">
                        <SegmentOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://www.pctechnologies.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg" alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
