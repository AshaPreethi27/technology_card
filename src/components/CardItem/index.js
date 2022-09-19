import './index.css'

const CardItem = props => {
  const {itemDetails} = props
  const {title, description, imgUrl, className} = itemDetails

  return (
     <li className={className} "card">
      <h1 className="cardHead">{title}</h1>
      <p className="cardPara">{description}</p>
      <img src={imgUrl} className="img-size" alt={title} />
    </li>
  )
}
export default CardItem
