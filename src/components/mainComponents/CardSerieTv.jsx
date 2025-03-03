import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flag from "react-world-flags";

// Mappatura tra codice lingua (ISO 639-1) e codice paese (ISO 3166-1 Alpha-2)
const languageToCountryCode = {
    "en": "US",
    "it": "IT",
    "es": "ES",
    "fr": "FR",
    "de": "DE",
    "ja": "JP"
};


// CardSerieTv.jsx
export default function CardSerieTv({ mediaCard }) {

    // Estrapolo il codice della lingua dall'oggetto mediaCard
    const language = mediaCard.original_language;

    // Se non trova una corrispondenza, usa il codice della lingua come fallback (language)
    const countryCode = languageToCountryCode[language] || language;  // Usa la lingua come fallback

    // vedo se il titolo è uguale al titolo originale delle serie tv
    const originalName = mediaCard.name === mediaCard.original_name ? '' : <h3>Titolo originale: {mediaCard.original_name}</h3>

    const votoDiviso = Math.ceil(mediaCard.vote_average / 2)
    return (
        <>
            <div className="card">
                <div className="container-img">
                    <img src={`https://image.tmdb.org/t/p/w200${mediaCard.poster_path}`} alt={mediaCard.poster_path} />
                </div>
                <div className="container-content">
                    <h3>Titolo: {mediaCard.name}</h3>
                    {/* Mostra il titolo orginale se diverso dal titolo */}
                    {originalName}
                    <span>
                        <span className="bold">Language: </span>   {/* Mostra la bandiera usando il codice del paese */}
                        <Flag code={countryCode} style={{ width: 20, height: 15, marginLeft: '10px' }} />
                    </span><br />
                    <span className="bold">Voto: </span>
                    <span>{votoDiviso >= 1 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                    <span>{votoDiviso >= 2 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                    <span>{votoDiviso >= 3 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                    <span>{votoDiviso >= 4 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                    <span>{votoDiviso >= 5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                    <p><span className="bold">Overview: </span>{mediaCard.overview}</p>
                </div>
            </div>

        </>
    )
}