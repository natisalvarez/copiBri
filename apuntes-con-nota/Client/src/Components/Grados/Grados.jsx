import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Grados.module.css";

const Grados = () => {
  const [grados, setGrados] = useState([]);

  useEffect(() => {
    axios.get("https://apiapn.copisterialowcost.info/Grados?facultadCode=F017-U021")
      .then((response) => {
        setGrados(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (

    <select className={style.selectGrados}>
      <option value="Grados">Grados</option>
        {grados.map((grados) => (
          <option key={grados.id}>{grados.nombre}</option>
        ))}
    </select> 
  )
};

export default Grados;