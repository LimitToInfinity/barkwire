import React from "react";

const DogCard = (props) => {
    return (
        <li>
            <img src={ props.imageUrl } alt="Dog's Name"/>
            <section>
                <h2>{ props.name }</h2>
                <p>{ props.description }</p>
            </section>
        </li>
    )
}

export default DogCard;