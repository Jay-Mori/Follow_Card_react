import React from "react";
import './Card.jsx';
import { useState } from 'react'

const Card = () => {

    const [count, setCount] = useState(1265)

    const increment = () => {
        setCount(count + 1)
    };

    const Decrement = () => {
        setCount(count - 1)
    };

    return (
        <>
            <div className="container">
       
                <div className="Main-Card">
                    <div className="img-card">
                        <img height={265} src="https://th.bing.com/th/id/OIP.xGFonj3MWLpkGiIAxK7CIQHaIL?rs=1&pid=ImgDetMain" alt="" />
                    </div>

                    <div>
                        <h1>Harshad Mehata</h1>
                        <h4>Scam 1999 - King Of Stock Market</h4>

                        <p>
                            Lorem ipsum dolor sit amet
                             consectetur adipisicing elit.
                              Voluptas voluptatem nam facilis dicta
                               perspiciatis illo sed minima facere! nam faci
                               lis facilis dicta nam facilis dicta Aliquam, esse!
                        </p>


                        <div>
                            <h2>
                                Counter : {count}
                            </h2>
                            <div>
                                <button onClick={increment} >Follow</button>
                                <button onClick={Decrement}>Unfollow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card