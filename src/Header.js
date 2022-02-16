import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

// import ClearIcon from '@mui/icons-material/Clear';
import logo from "./imgs/logo.jpg";



function Header() {
 
 

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon style={{ fontSize: 28 ,color:"white",height:"20"}} className="header-icon" />

        <Link to="/">
          <img src={logo} alt="" className="header-logo" />
        </Link>
      </div>

      <div className="header-middle">
      
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search.."
          style={{ backgroundColor:"black",border:" 1px solid #656966",borderRadius:"2px",color:"white",width:"60px"}}
        />
         

        <Link to={`/search/${inputSearch}`} className="header-input-icon" style={{backgroundColor:"#2e302e"}}>
          <SearchIcon className="search-icon" style={{backgroundColor:'#2e302e'}}/>
          
        </Link>
          
     
      
      
      </div>
      

      <div className="header-right">
        <VideocamIcon style={{ fontSize: 28,color:"white" }} className="header-icon" />
        <AppsIcon style={{ fontSize: 28,color:"white" }} className="header-icon" />
     <NotificationsNoneIcon style={{ fontSize: 28 ,color:"white"}} className="header-icon" /> 
            <Avatar alt="Cindy Baker" src="https://p5-tt.byteimg.com/origin/pgc-image/b5bc8ac7b927497b8296ac0cf6bad463.jpg" />
      </div>
    </div>
  );
}

export default Header;
