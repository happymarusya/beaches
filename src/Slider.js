import { useState } from "react";
import Buttons from "./Buttons";

function Slider({imageProps}){

    const [photo, setPhoto] = useState(0);

    const nextPhoto = () => {
        setPhoto((photo  => {
            photo ++;
            if(photo > imageProps.length - 1){
                photo = 0;
            }
            return photo;
        }))
    }

    const previousPhoto = () => {
        setPhoto((photo => {
            photo --;
            if(photo < 0) {
                return imageProps.length - 1
            }
            return photo;
        }))
    }
    return (
        <div>
            <div>
                <img id='slider' src= {imageProps[photo]} alt='Beach' width='500px'/>
            </div>

            <Buttons previousProps={previousPhoto} nextProps={nextPhoto}/>
        </div>
    )
}
export default Slider;