import { useState } from "react";
import Chart from "../components/Chart";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// importing data
import { DEATHS } from "../shared/deaths.js";
import { RECOVERED } from "../shared/recovered.js";
import { CONFIRMED } from "../shared/confirmed.js";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const death = DEATHS;
  const recov = RECOVERED;
  const confi = CONFIRMED;

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      <div>
        <h1 className="font-loader">
          <span href="#" id="tt">
            Prediction Curves
          </span>
        </h1>
        <UncontrolledTooltip placement="right-end" target="tt">
          LSTM Time Series Forecasting
        </UncontrolledTooltip>
      </div>

      <Nav card className="pill-items">
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("1");
            }}
            className="tabname"
          >
            Recovered
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("2");
            }}
            className="tabname"
          >
            Death
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("3");
            }}
            className="tabname"
          >
            Confirmed
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="9">
              <Chart data={recov} curvename={"recovered"} />
            </Col>
            <Col sm="3" className="meta">
              <h2>Recovered</h2>
              <h1>170,108,198</h1>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="9">
              <Chart data={death} curvename= {"deaths"} />
            </Col>
            <Col sm="3" className="meta">
              <h2>Deaths</h2>
              <h1>170,108,198</h1>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="9">
              <Chart data={confi} curvename={"confirmed"} />
            </Col>
            <Col sm="3" className="meta">
              <h2>Confirmed</h2>
              <h1>170,108,198</h1>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Home;
