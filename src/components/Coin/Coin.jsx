/* Coin.jsx */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './coin.module.css';

function Coin() {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
            .then((res) => res.json())
            .then((data) => setCoin(data.data))
            .catch((err) => {
                console.error(err);
                setError("There was an error loading the coin data.");
            });

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.includes(id));
    }, [id]);

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorite) {
            favorites = favorites.filter((favId) => favId !== id);
        } else {
            favorites.push(id);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    if (error) return <p className="error">{error}</p>;
    if (!coin) return <p>Loading...</p>;

    return (
        <div className="coin-page">
            <h1 className="coin-title">{coin.name} ({coin.symbol})</h1>
            <p className="coin-rank">Rank: {coin.rank}</p>
            <p className="coin-price">Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
            <button className="coin-btn" onClick={toggleFavorite}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
}

export default Coin;
