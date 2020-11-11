import React from "react";

const footerStyle = {
    position: "fixed",
    marginTop: "50%",
    color: "beige",
    fontSize: "10px",
    backgroundColor: "rgb(58, 58, 58)"
}

const Footer = () => {
    return (
        <>
            <div className="attributions" style={footerStyle}>
                Icons made by <a href="https://icon54.com/">Pixel perfect</a> and 
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from 
                <a href="https://www.flaticon.com/">www.flaticon.com</a>
            </div>
        </>
    )
}

export default Footer;