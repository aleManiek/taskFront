import React, { useState, useEffect } from "react";
import Client from "./Client";
import "./ClientsList.css";
import data from "../data/clients.json";

export default function ClientList() {
  const [clients, updateClients] = useState([]);

  useEffect(() => {
    updateClients(data.data);
  }, []);

  const filterList = e => {
    const currentClients = data.data;
    const updatedClients = currentClients.filter(client => {
      const nameToSearch = e.target.value.replace(/[^\w\s]/gi, "").toLowerCase();
      return client.name.toLowerCase().search(nameToSearch) !== -1;
    });

    updateClients(updatedClients);
  };

  const sortList = e => {
    let sortedClients = [...clients];

    switch (e.target.value) {
      case "a-z":
        sortedClients.sort((a, b) => (a.email > b.email ? 1 : -1));
        break;
      case "z-a":
        sortedClients.sort((a, b) => (a.email < b.email ? 1 : -1));
        break;
      case "age asc":
        sortedClients.sort((a, b) => (a.age > b.age ? 1 : -1));
        break;
      case "age desc":
        sortedClients.sort((a, b) => (a.age < b.age ? 1 : -1));
        break;

      default:
    }
    updateClients(sortedClients);
  };

  return (
    <div className="client-list">
      <div id="inputs">
        <input type="text" placeholder="Szukaj" onChange={filterList} />
        <select onChange={sortList}>
          <option value="">Sortuj</option>
          <option value="a-z"> e-mail [A-Z] </option>
          <option value="z-a"> e-mail [Z-A] </option>
          <option value="age asc"> Wiek Rosnąco</option>
          <option value="age desc"> Wiek Malejąco</option>
        </select>
      </div>

      {clients.map(client => (
        <Client data={client} key={client._id} />
      ))}
    </div>
  );
}
