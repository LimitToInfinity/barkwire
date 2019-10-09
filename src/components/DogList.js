import React from "react";
import DogCard from "./DogCard.js";

const DogList = (props) => {
    
    const dogCards = props.dogs.map(dog => {
        return (
            <DogCard
                name={dog.name}
                description={dog.description}
                imageUrl={dog.imageUrl}
            />
        )
    })

    return (
      <ul className="dogs">
          { dogCards }
      </ul>
    )
}

export default DogList;