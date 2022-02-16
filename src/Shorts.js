import React from 'react';
import "./Shorts.css";
import NewsItem from "./ShortsItem";
import piano from "./imgs/piano.mp4";
import short2 from "./imgs/short2.mp4"
import short3 from './imgs/short3.mp4'
function Shorts() {
    var VIDEOS = {
  deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};
    return (
        <div className="news">
            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJyY9jLhVGXYAyCwcO7a1dsSmfrnB9Ie0Bzr9Rum=s900-c-k-c0x00ffffff-no-rj"
                name = "Excel Movies"
                timestamp = "8 hours ago"
                src= {VIDEOS.deer}
                like = "31K"
                comment = "213"

            />

            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s900-c-k-c0x00ffffff-no-rj"
                name = "Netflix India"
                timestamp = "5 days ago"
                src={short3 }
                like = "48K"
                comment = "653"

            />

            <NewsItem
                logoImage = "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_3x4.jpg"
                name = "Catss"
                timestamp = "8 hours ago"
                src={VIDEOS.cat}
                like = "21K"
                comment="665"

            />

            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJw-6pk5CzY8UBlTnngE4oUnBein8uRyHiVFEj8CIg=s900-c-k-c0x00ffffff-no-rj"
                name = "Zee Music Company"
                timestamp = "1 day ago"
                src={VIDEOS.spider}
                like = "81K"
                comment = "343"

            />
            
            <NewsItem
                logoImage = "https://yt3.ggpht.com/sRwmD2yl3VzxNCSonUScDvkLuOxA0Ti7orWD4395eueypnBrwwk2Zpf9t6dp245hm_xtt2Cz-w=s176-c-k-c0x00ffffff-no-rj"
                name = "ok piano"
                timestamp = "1 day ago"
                src={piano}
                like = "81K"
                comment = "343"

            />
            
            <NewsItem
                logoImage = "https://yt3.ggpht.com/zARCXFnRRapN6Rjd_DR2ORwnS7muSw_vO0QwM_hHzTaY3jr92fxAMAtN-ZsZo6m6n6FYTyMSHw=s176-c-k-c0x00ffffff-no-rj"
                name = "Amazon Prime India"
                timestamp = "1 day ago"
               src={short2}
                like = "81K"
                comment = "343"

            />
            
            <NewsItem
                logoImage = "https://yt3.ggpht.com/a/AATXAJw-6pk5CzY8UBlTnngE4oUnBein8uRyHiVFEj8CIg=s900-c-k-c0x00ffffff-no-rj"
                name = "Zee Music Company"
                timestamp = "1 day ago"
               src={short3}
                like = "81K"
                comment = "343"

            />
        </div>
    )
}

export default Shorts
