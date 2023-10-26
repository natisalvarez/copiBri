import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Nav.module.css"

const Nav = () => {
  const [universidades, setUniversidades] = useState([]);
  const [codigo, setCodigo] = useState("");
  const [facultades, setFacultades] = useState([]);

  useEffect(() => {
    axios
      .get("https://apiapn.copisterialowcost.info/Universidades")
      .then((response) => {
        setUniversidades(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar las universidades:", error);
      });
  }, []);

  useEffect(() => {
      axios
        .get(
          `https://apiapn.copisterialowcost.info/Facultades?universidadCode=${codigo}`
        )
        .then((response) => {
          setFacultades(response.data);
        })
        .catch((error) => {
          console.error("Error al cargar las facultades:", error);
        });
  }, [codigo]);

  const handleUniversidadChange = (event) => {
    setCodigo(event.target.value);
  };

  return (
    <div className={style.NavBar}>
      <ul className={style.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <select className={style.select} onChange={handleUniversidadChange}>
        <option value="">Universidades</option>
        {universidades.map((university, index) => (
          <option key={index} value={university.codigo}>
            {university.nombre}
          </option>
        ))}
      </select>
        </li>
        <li>
        <select className={style.select}>
        <option value="">Facultades</option>
        {facultades.map((facultad, index) => (
          <option key={index} value={facultad.codigo}>
            {facultad.nombre}
          </option>
        ))}
      </select>
        </li>
      </ul>
    </div>
  )}

export default Nav;
