import React from 'react'

const scroll = () => {

    window.onscroll = function(){
        
        var position = document.documentElement.scrollTop;
        var result = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollValue = position * 100 / result;
        document.getElementById("scroll-Slide").style.width = scrollValue + "%";

    }
}

export default scroll
