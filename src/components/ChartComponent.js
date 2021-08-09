import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
import "../App.css";
import { DEATHS } from "../shared/deaths.js";
import { RECOVERED } from "../shared/recovered.js";
import { CONFIRMED } from "../shared/confirmed.js";

function RenderChart({ data }) {
  return (
    <div className="question">
      <div className="question-container">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#05388b"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#FFA500" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const Chart = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const death = DEATHS;
  const recov = RECOVERED;
  const confi = CONFIRMED;

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div>
        <h1 className="font-loader">
          <span href="#" id="tt">
            Prediction Curves
          </span>
        </h1>
        <UncontrolledTooltip placement="right" target="tt">
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
              <RenderChart data={recov} />
            </Col>
            <Col sm="3" className="meta">
              <h1>Recovered</h1>
              <h1>170,108,198</h1>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="9">
              <RenderChart data={death} />
            </Col>
            <Col sm="3" className="meta">
              <h1>Deaths</h1>
              <h1>170,108,198</h1>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="9">
              <RenderChart data={confi} />
            </Col>
            <Col sm="3" className="meta">
              <h1>Confirmed</h1>
              <h1>170,108,198</h1>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
};

export default Chart;
