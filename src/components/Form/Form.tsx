import React, { useState } from "react";

interface Car {
  model: string;
}

const Form: React.FC = () => {
  const [car, setCar] = useState<Car>({ model: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ model: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(car.model);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Model:
        <input type="text" value={car.model} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
