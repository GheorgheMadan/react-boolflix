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

// CardFilm.jsx
export default function CardFilm({ mediaCard, type }) {

    // Estrapolo il codice della lingua dall'oggetto mediaCard
    const language = mediaCard.original_language;

    // Se non trova una corrispondenza, usa il codice della lingua come fallback (language)
    const countryCode = languageToCountryCode[language] || language;  // Usa la lingua come fallback



    return (
        <>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w342${mediaCard.poster_path}`} alt={mediaCard.poster_path} />
                <h3>{type === 'film' ? mediaCard.title : mediaCard.name}</h3>
                <span>{type === 'film' ? mediaCard.original_title : mediaCard.original_name}</span><br />
                <span>
                    Language:   {/* Mostra la bandiera usando il codice del paese */}
                    <Flag code={countryCode} style={{ width: 20, height: 15, marginLeft: '10px' }} />
                </span><br />

                <span> {Math.ceil(mediaCard.vote_average / 2) >= 1 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                <span> {Math.ceil(mediaCard.vote_average / 2) >= 2 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                <span> {Math.ceil(mediaCard.vote_average / 2) >= 3 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                <span> {Math.ceil(mediaCard.vote_average / 2) >= 4 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
                <span> {Math.ceil(mediaCard.vote_average / 2) >= 5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}</span>
            </div>

        </>
    )
}