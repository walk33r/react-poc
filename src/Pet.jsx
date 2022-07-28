// Here we create a Pet Component consist of 1 nested div component
// which in turn consist of one h1,h2 and h3 component.
// This is just a blue-print of Pet component, just like a class in java.
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  )
};


export default Pet;