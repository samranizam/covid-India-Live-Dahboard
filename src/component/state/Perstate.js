import { useState } from "react";
//import axios from "axios";
import "C:/react/cov/covid/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:/react/cov/covid/src/component/state/perstate.css";
import {
  Button,
  Card,
  CardColumns,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useEffect } from "react";

const Perstate = () => {
  const [states, setStates] = useState([]);

  const GetCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setStates(actualData.statewise);
  };
  useEffect(() => {
    GetCovidData();
  }, []);
  return (
    <Container style={{ width: "100%", float: "none" }}>
      <Row
        style={{ textAlign: "center" }}
        className="justify-content-md-center"
      >
        {states.slice(1).map((curEl, ind) => {
          return (
            <Col>
              <Card
                className="card1"
                style={{ width: "20rem", heigth: "40rem" }}
              >
                <div key={ind} className="container">
                  {/* <div className="row">
              <div className="col-sm"> */}
                  <div className="card">
                    {/* <div className="card-body">
                <div className="card-text"> */}
                    <p className="heading2"> Data of {curEl.state}</p>
                    <p className="heading3">
                      Active Cases : {curEl.active} <br />
                      Confirmed Cases : {curEl.confirmed} <br />
                      Total Deaths : {curEl.deaths}
                      <br/>
                      Last Updated Time : {curEl.lastupdatedtime}
                      <br />
                    </p>
                  </div>
                  {/* </div>
                </div> */}
                  {/* </div>
            </div> */}
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Perstate;
