import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import '../App.css';
import {DEATHS} from '../shared/deaths.js';
import {RECOVERED} from '../shared/recovered.js';
import {CONFIRMED} from '../shared/confirmed.js';

function RenderChart({data}){
  return(
    <div className="question">
      <div className="question-container">
        <ResponsiveContainer width="100%" height="100%">
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
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


const Chart = (props) => {

  const [activeTab, setActiveTab] = useState('1');
  const death = DEATHS;
  const recov = RECOVERED;
  const confi = CONFIRMED;

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return(
      <>
        <Nav fill>
          <NavItem>
            <NavLink
              onClick={() => { toggle('1'); }}
            >
              Recovered
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => { toggle('2'); }}
            >
              Death
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => { toggle('3'); }}
            >
              Confirmed
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="8">
                <RenderChart data={recov}/>
              </Col>
              <Col sm="4" className="meta">
                <h1><b>Recovered:</b></h1>
                <h1>170,108,198</h1>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="8">
                <RenderChart data={death}/>
              </Col>
              <Col sm="4" className="meta">
                <h1><b>Deaths:</b></h1>
                <h1>170,108,198</h1>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="8">
                <RenderChart data={confi}/>
              </Col>
              <Col sm="4" className="meta">
                <h1><b>Confirmed:</b></h1>
                <h1>170,108,198</h1>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </>
  );
}

export default Chart;