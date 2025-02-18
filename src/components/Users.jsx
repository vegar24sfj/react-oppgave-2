import React, { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

const Users = () => {
  const [users, setUsers] = useState(mockData); // Bruk useState for å lagre brukerlisten
  const [newUser, setNewUser] = useState({ username: "", email: "" }); // Håndtere ny bruker

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value }); // Oppdaterer input-feltene
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.username && newUser.email) {
      setUsers([...users, newUser]); // Legger til ny bruker i listen
      setNewUser({ username: "", email: "" }); // Tømmer input-feltene
    }
  };

  return (
    <div>
      <h3>Brukerliste</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>

      <h4>Legg til ny bruker</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Brukernavn"
          value={newUser.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={newUser.email}
          onChange={handleChange}
        />
        <button type="submit">Legg til bruker</button>
      </form>
    </div>
  );
};

export default Users;
