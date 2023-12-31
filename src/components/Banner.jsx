import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div>
            <img src="https://i.postimg.cc/4NMT1VPr/navbar.png" alt="" />
            <Link to="/pokedex">
                <div className="banner__img">
                    <img className="banner__letter" src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Banner