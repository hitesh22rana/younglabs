import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import SelectedCard from './components/SelectedCard/SelectedCard';

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        await axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020').then(function (response) {
          const newData = response?.data?.results;
          setData(newData);
          setSelected(0);
        })
      } catch (err) {
        console.log(err);
      }
    }
    fetchdata();
  }, [])

  return (
    <>
      <Navbar />
      {data.length > 0 && <SelectedCard data={data[selected]} />}
      <div className="wrapper">
        {
          data?.map((card, index) => {
            return (
              <Card key={index} id={index} selected={selected} setSelected={setSelected} props={card} />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
