import React, { useState, useEffect } from "react";

import Pet from "./Pet"
import useBreedList from "./useBreedList";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  

  const [location, setlocation] = useState("Seattle, WA");
  const [animal, setanimal] = useState("");
  const [breed, setbreed] = useState("");
  const [pets, setpets] = useState([]);
  const [BREED] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, [])

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setpets(json.pets);
  }

  return (
    <div className="search-params">

      {
        pets.map(pet => <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={pet.breed}/>)
      }

      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setanimal(e.target.value);
              setbreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>


        <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              onChange={(e) => setbreed(e.target.value)}
            >
              <option />
              {BREED.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>


        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
