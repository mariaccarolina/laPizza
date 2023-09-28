import React from "react";
import Restaurante from "../assets/restaurante.png"

function Footer(){
    return(
        <footer>
            <img src={Restaurante} alt="Restaurante" />
            <section>
                <h2>Sobre a La Pizza</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </p>
                <button>Ler mais</button>
            </section>
        </footer>
    )
}
export default Footer