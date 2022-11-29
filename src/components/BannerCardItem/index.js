// Write your code here.
import './index.css'

const CardItem = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardItem
