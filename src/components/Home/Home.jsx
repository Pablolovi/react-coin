/* Home.jsx */
import { useState, useEffect } from "react";   
import { Link } from "react-router-dom";
import './home.module.css';

function Home() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((res) => res.json())
            .then((data) => setCoins(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="home-page">
            <h1 className="title">Top Cryptocurrencies</h1>
            <ul className="crypto-list">
                {coins.map((coin) => (
                    <li key={coin.id} className="crypto-item">
                        <Link to={`/coin/${coin.id}`} className="crypto-link">
                            {coin.rank}. {coin.name} (${coin.symbol}) - ${parseFloat(coin.current_price).toFixed(2)} {/* Modificado */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

    

