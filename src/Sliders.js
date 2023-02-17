import { useState } from "react";
import { data } from "./data";
import Slider from "./Slider";

function Sliders() {
    const [beaches, setBeaches] = useState(data);

    const removeItem = (id) => {
    let newBeaches = beaches.filter(element => element.id !== id);
    setBeaches(newBeaches);
};

    return (
        <div className='main'>
            <div className='container'>
                <h1>{beaches.length} Stunning Beaches Around the World</h1>
            </div>

            {beaches.map((element => {
                const {id, place, description, image} = element;

            return (
                <div className='container' key={id}>
                    <div> 
                        <div className='card'>
                            <div className="face face1">
                                <div className='content'>
                                    <div>
                                        <h3>{id}.{place}</h3>
                                    </div>
                                    <div>
                                        <Slider imageProps={image}/>
                                    </div>
                                </div>
                            </div>

                            <div className="face face2">
                                <div className="content">
                                    <div>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className='button'>
                            <button className='delete' onClick={() => removeItem(id)}>Delete</button>
                        </div>
                    </div>
                </div>
) 
}))}
                <div className='container'>
                    <button className='deleteAll' onClick={()=> setBeaches([])}>Delete All</button>
                </div>
            </div>
);
} 
export default Sliders;