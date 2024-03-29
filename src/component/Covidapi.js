import axios from "axios";
import "C:/react/cov/covid/src/component/covidapi.css";
import "C:/react/cov/covid/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
function Covidapi  {
  const [data, setData] = useState([]);
   useEffect(() => {
  const user =  () => {
    
      axios.get(
        "https://api.covid19india.org/data.json",
    
        
           
              )
      .then ((res) => {
      console.log(user.data.data[0]);
      setData(user.data.statewise[0]);
      })
    .catch((err) =>{ console.log(err);
      });
  }
    user();
    }, [])
 
  return (
    <div>
      <h5 className=".bg-danger text-center"> !!LIVE!! </h5>
      <h1 className="display-5 text-center">
        COVID-19 CORONA VIRUS TRACKER OF INDIA
      </h1>
      <h5 className="footer">DATA LAST UPDATED - {data.lastupdatedtime} </h5>
      <h1>TOTAL CASES IN INDIA</h1>
      <h3>Confirmed cases: {data.confirmed} </h3>
      <h3>Active Cases: {data.active} </h3>
      <h3>Total deaths: {data.deaths} </h3>
      <h3>Total recovery: {data.recovered} </h3>

      <h1>State Wise Data</h1>
      {/* <span>{data.recovered}</span>
      <span>{data.recovered}</span> */}
    </div>
  );
};

export default Covid;
