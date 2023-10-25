import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Facultades.module.css";


const Facultades = () => {
  const [facultades, setUniversities] = useState([]);

  useEffect(() => {
    axios.get("https://apiapn.copisterialowcost.info/Facultades?universidadCode=U021")
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <select className={style.selectFacultades}>
      <option value="Facultades"> Facultades</option>
      {facultades.map((facu) => (
        <option key={facu.codigo}>{facu.nombre}</option>
      ))}
    </select>
  );
};

export default Facultades;