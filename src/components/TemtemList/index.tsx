import React, { useEffect, useState } from 'react'
import TemtemCard from "../TemtemCard";
import api from "../../services/Axios";
import ".//styles.css"

const TemtemList = () => {
  let [data, setData] = useState({});

  const getTemtemList = () => {
    api.get(`/temtems`)
    .then((response) => setData(response.data))
    .catch((err) => console.log("Error:", err));
  }
  
  useEffect(() => {
    getTemtemList();
  }, []);

  return (
    <div className="temtem-card">
      <TemtemCard />
    </div>
  )
}

export default TemtemList;