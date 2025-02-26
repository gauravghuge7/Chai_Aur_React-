

function Avatar({src, height, width, children}) {

    return(
        <>
            <img src={src} width={width} height={height} alt="" />

            {children}
        </>
    );

}


export {
    Avatar
}
