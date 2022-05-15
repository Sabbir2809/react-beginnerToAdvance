import React from "react";


function FooterLInkLeft({title, url}) {
    return (
        <>
            <a href={url}>{title}</a>
        </>
    )
}

export default FooterLInkLeft;
