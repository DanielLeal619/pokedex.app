import { useRef } from "react"
import { setTrainerS } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./styles/HomePage.css"


const HomePage = () => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTrainer = (e) => {
    e.preventDefault()
    dispatch(setTrainerS(inputTrainer.current.value.trim()))
    navigate("/pokedex")
  }

  const urlImg = "https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"

  return (
    <article className="home">
      <div className="home__fatherimg">
      <img className="home__img" src={urlImg}></img>
      </div>
      <h2 className="home__phrase">Hey trainer! Introduce your name to start with this adventure!</h2>
      <form className="home__name" onSubmit={handleTrainer}>      
        <input className="home__input" placeholder="Gotta catch 'em all!" ref={inputTrainer} type="text" />
        <button className="home__button">Start!</button>      
      </form>
    </article>
  )
}

export default HomePage