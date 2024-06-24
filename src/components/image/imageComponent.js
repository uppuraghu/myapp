export const ImageComponent = (prop) =>{
    console.log(prop,"prop");
    const {src,width,height,alt}=prop
    return <img {...prop}/>
};