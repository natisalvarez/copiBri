import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './Universidades.module.css';

const Universidades = () => {
  const [universities, setUniversities] = useState([]);


  useEffect(() => {
    axios.get("https://apiapn.copisterialowcost.info/Universidades")
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  }, []);


  return (
    <select className={style.selectUniversidades}>
        <option value="Universidades" >Universidades</option>
         let optionItems =  { universities.map((university, index) => (
          <option key={index} value={university.nombre}>{university.nombre}</option>
        ))}
      </select>
  );
}

export default Universidades;

