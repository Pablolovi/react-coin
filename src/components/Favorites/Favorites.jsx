/* Favorites.jsx */
import { useState, useEffect } from "react";   
import { Link } from "react-router-dom";
import './favorites.module.css';

function Favorites() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favoriteIds.length > 0) {
            fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + favoriteIds.join(",") + "&sparkline=false")
                .then((res) => res.json())
                .then((data) => {
                    setCoins(data);
                })
                .catch((err) => console.error(err));
        }
    }, []);

    return (
        <div className="favorites-page">
          <h1 className="title">Favorites</h1>
          {coins.length > 0 ? (
            <ul className="crypto-list">
              {coins.map((coin) => (
                <li key={coin.id} className="crypto-item">
                  <Link to={`/coin/${coin.id}`} className="crypto-link">
                    {coin.name} (${coin.symbol}) - ${parseFloat(coin.priceUsd).toFixed(2)}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty">No favorites added yet.</p>
          )}
        </div>
      );
    }

export default Favorites;