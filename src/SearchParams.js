import React, { useState } from "react";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const BREED = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [location, setlocation] = useState("Seattle, WA");
  const [animal, setanimal] = useState("");
  const [breed, setbreed] = useState("");

  return (
    <div className="search-params">
      <form>
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
            onBlur={(e) => {
              setanimal(e.target.animal);
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
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              onChange={(e) => setbreed(e.target.value)}
              onBlur={(e) => setbreed(e.target.value)}
            >
              <option />
              {BREED.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
