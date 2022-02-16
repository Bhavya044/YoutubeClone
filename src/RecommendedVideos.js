import React from "react";
import "./recommended.css";
import VideoCard from "./VideoCard";
import FilterBar from "./FilterBar";
import Cover from './Cover';
import werollin from "./imgs/werollin.jpg"
import News from './Shorts';
import marketdown from "./imgs/marketdown.jpg"
import floor from "./imgs/floor.jpg"
import BoltIcon from '@mui/icons-material/Bolt';
import IconButton from '@mui/material/IconButton';


function RecommendedVideos() {

  return (

    <div className="recommended">
      <FilterBar />

      <Cover />

      <h2>Recommended</h2>

      <div className="recommendedVideo">
        <VideoCard className="vdoCard"
          title="We Rollin(Official Audio)"
          views="1.9M views"
          timestamp="5 months ago"
          image={werollin} 
          channelImage="https://yt3.ggpht.com/IYdoiYDhoyttlBF7yTLFU2qAaHiB-EiggP5iDF1NNL2rlH5FZouH5gjiEET7yeRSk-jy6YVRgw=s176-c-k-c0x00ffffff-no-rj"
          channel="Shubh"
          
        />
        <VideoCard className="vdoCard"
          title="Market Down hai"
          views="890k views"
          timestamp="10 days ago"
          image={marketdown}
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSXCDt9NXOx43LhjAQD02awkevXROEE_8aTuF6cCw=s900-c-k-c0x00ffffff-no-rj"
          channel="Gaurav gupta"
        />
        <VideoCard className="vdoCard"
          title="How to find floor or ceiling value in BST"
          views="35k views"
          timestamp="3 months ago"
          image={floor}
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRLiaa4P2JkseBtgCkK5V-RbkQGwBTWzl824553=s900-c-k-c0x00ffffff-no-rj"
          channel="Anuj Bhaiya"
        />
        <VideoCard className="vdoCard"
          title="Amazon Clone using ReactJS - The Ultimate Guide"
          views="1.9M views"
          timestamp="2 months ago"
          image="https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg"
          channelImage="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"
          channel="Clever Programmer"
        />

        <VideoCard className="vdoCard"
          title="BB Ki Vines- | ManglooSutra |"
          views="17M views"
          timestamp="1 months ago"
          image="https://i.ytimg.com/vi/BslKbJkOm98/maxresdefault.jpg"
          channelImage="https://yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s900-c-k-c0x00ffffff-no-rj"
          channel="BB Ki Vines"
        />
  
        <VideoCard className="vdoCard"
          title="Darshan Raval - Hawa Banke | Official Music Video | Nirmaan..."
          views="130M views"
          timestamp="1 year ago"
          image="https://www.lyricsbell.com/wp-content/uploads/2019/07/hawa-banke-darshan-raval.jpg"
          channelImage="https://yt3.ggpht.com/a/AATXAJyAtaR5kNZ5b7-4ytyB2NOnmPYRO9IXqHHxOBRH=s900-c-k-c0x00ffffff-no-rj"
          channel="Indie Music Label"
        /> 
        <VideoCard className="vdoCard"
          title="The joker and the Queen.."
          views="10M views"
          timestamp="1 months ago"
          image="https://i.ytimg.com/vi/wyE9x5HETkY/maxresdefault.jpg"
          channel="Taylor Swift"
        />
        <VideoCard className="vdoCard"
          title="Welcome to shark tank Ep-1"
          views="50k views"
          timestamp="5 months ago"
          image="https://i.ytimg.com/vi/9RQX1Ssu3QM/maxresdefault.jpg"
          channelImage="https://images-na.ssl-images-amazon.com/images/I/91KwasehsHL._RI_.jpg"
          channel="SonyLiv"
        />
        <VideoCard className="vdoCard"
          title="I don't wanna Live forever"
          views="1.9M views"
          timestamp="5 months ago"
          image="https://i.ytimg.com/vi/7F37r50VUTQ/maxresdefault.jpg"
          channelImage="https://images-na.ssl-images-amazon.com/images/I/91KwasehsHL._RI_.jpg"
          channel="Zayn Malik"
        />
        <VideoCard className="vdoCard"
          title="Excuses"
          views="11M views"
          timestamp="5 months ago"
          image='https://i.ytimg.com/vi/vX2cDW8LUWk/maxresdefault.jpg'
          channelImage="https://yt3.ggpht.com/jI3p9-0oDtdnEUFDfcLJvVPlvFU00gbadPUkAQJ9ZjIy3S07_JvDxr60hSCfyiMSibDkosBhaeE=s176-c-k-c0x00ffffff-no-rj"
          channel="Ap Dhillon"
        />
        <VideoCard className="vdoCard"
          title="offShore"
          views="4.6M views"
          timestamp="3 days ago"
          image='https://i.ytimg.com/vi/ixgaS-3FfK4/maxresdefault.jpg'
          channelImage="https://yt3.ggpht.com/IYdoiYDhoyttlBF7yTLFU2qAaHiB-EiggP5iDF1NNL2rlH5FZouH5gjiEET7yeRSk-jy6YVRgw=s176-c-k-c0x00ffffff-no-rj"
          channel="Shubh"
        />
        <VideoCard className="vdoCard"
          title="We Rollin(Official Audio)"
          views="1.9M views"
          timestamp="5 months ago"
          image={werollin} 
          channelImage="https://yt3.ggpht.com/IYdoiYDhoyttlBF7yTLFU2qAaHiB-EiggP5iDF1NNL2rlH5FZouH5gjiEET7yeRSk-jy6YVRgw=s176-c-k-c0x00ffffff-no-rj"
          channel="Shubh"
        />
      </div>

      <hr />
      <h2>#Shorts <IconButton><BoltIcon style={{color:"red"}}/>
      </IconButton> </h2>
      <News />
    </div>
  );
}


export default RecommendedVideos;
