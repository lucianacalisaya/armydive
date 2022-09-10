import './Promo.scss'
const Promo = ({greeting}) => {
    return (
        <div className="banner-container">
            <h5 className="promo-banner">{greeting}</h5>
        </div>
    )
}

export default Promo