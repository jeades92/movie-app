import React from 'react'; 

function Card(props) {
    const { title, imageUrl, body } = props;

    return (
        <div className="card-container">
            <h2 className='card-title'>{title}</h2>
            <img src={imageUrl} alt="Card" className="card-image"/>
            <p className="card-description">{body}</p>
        </div>
    )
}

export default Card;