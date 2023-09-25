import React from "react";
import Menta from "../assets/menta.png"

function Card(){
    return(
        <section className="container-pizza">
            <div className="card">
                <img className="imgPizza" src={Menta} alt="" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button className="btn">Comprar agora</button>
            </div>
            
            <div className="card">
                <img className="imgPizza" src={Menta} alt="" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button className="btn">Comprar agora</button>
            </div>

            <div className="card">
                <img className="imgPizza" src={Menta} alt="" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button className="btn">Comprar agora</button>
            </div>

            <div className="card">
                <img className="imgPizza" src={Menta} alt="" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button className="btn">Comprar agora</button>
            </div>
        </section>
    )
}
export default Card