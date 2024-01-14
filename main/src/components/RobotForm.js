import { useState } from "react";

function RobotForm({ onAdd }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [mass, setMass] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const massNumber = Number(mass);
    if (massNumber < 500) {
      onAdd({ type, name, mass: "" });
    } else {
      onAdd({ type, name, mass: massNumber });
    }
    setName("");
    setType("");
    setMass("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="type"
        id="type"
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="mass"
        id="mass"
        value={mass}
        onChange={e => setMass(e.target.value)}
      />
      <button type="submit" value="add">
        add
      </button>
    </form>
  );
}

export default RobotForm;
