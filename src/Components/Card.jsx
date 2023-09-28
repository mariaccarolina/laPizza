import React, {useState} from "react";
import Menta from "../assets/menta.png"
import Cuma from "../assets/cuma.png"
import Bana from "../assets/bana.png"
import Toca from "../assets/toca.png"

function Card(){
    //lógica do nosso componente
    // dentro dos colchetes [] terá 2 palavras
    // a primeira é o estado atual => ela armazena o que está dentro do useState
    // a segunda é a função que vai atualizar o estado atual
    // o segundo nome sempre vai iniciar com o set + o nome do estado atual 
    //usando camelCase
    const [mensagem, setMensagem] = useState("")
    const [pizza, setPizza] = useState("")
    const [imagem, setImagem] = useState()

    //arrow function
    const laMenta = () => {
        setTimeout(()=>{
            setMensagem("Seu pedido é:")
            setPizza("La Menta")
            setImagem(Menta)
        },2000)
    }

    const laCuma = () => {
        setTimeout(()=>{
            setMensagem("Seu pedido é:")
            setPizza("La Cuma")
            setImagem(Cuma)
        },2000)
    }

    const laBana = () => {
        setTimeout(()=>{
            setMensagem("Seu pedido é:")
            setPizza("La Bana")
            setImagem(Bana)
        },2000)
    }

    const laToca = () => {
        setTimeout(()=>{
            setMensagem("Seu pedido é:")
            setPizza("La Toca")
            setImagem(Toca)
        },2000)
    }

    //setTimeout executa uma função dps de um tempo
    // setTimeout(função, time)

    return(
        <main>
            <h2>{mensagem}</h2>
            <h2>{pizza}</h2>
            <img src={imagem} alt="" />
        <section className="container-pizza">
            <div className="card">
                <img className="imgPizza" src={Menta} alt="pizza menta" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laMenta} className="btn">Comprar agora</button>
            </div>
            
            <div className="card">
                <img className="imgPizza" src={Cuma} alt="pizza cuma" />
                <h4>La Cuma</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laCuma} className="btn">Comprar agora</button>
            </div>

            <div className="card">
                <img className="imgPizza" src={Bana} alt="pizza bana" />
                <h4>La Bana</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laBana} className="btn">Comprar agora</button>
            </div>

            <div className="card">
                <img className="imgPizza" src={Toca} alt="" />
                <h4>La Toca</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laToca} className="btn">Comprar agora</button>
            </div>
        </section>
        </main>
    )
}
export default Card