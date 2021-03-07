import React, { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import "./style.css";
import DraggableContainer from "./DraggableContainer";
console.log(localStorage.key("layouts"));
if (localStorage.getItem("layouts") == null) {
  localStorage.setItem("layouts", JSON.stringify([]));
}
const Container = () => {
  const [layouts, setLayouts] = useState(
    JSON.parse(localStorage.getItem("layouts"))
  );
  const [currentLayouts, setCurrentLayouts] = useState(
    JSON.parse(localStorage.getItem("layouts"))
  );
  const [isDashboard, setIsDashboard] = useState(true);
  const generateForm = (key) => {
    setLayouts([
      ...layouts,
      {
        i: `form${key}`,
        x: 0,
        y: 0,
        w: 4,
        h: 8,
        minW: 4,
        maxW: 6,
        minH: 8,
        maxH: 8,
      },
    ]);
  };

  const generateTable = (key) => {
    setLayouts([
      ...layouts,
      {
        i: `card${key}`,
        x: 7,
        y: 0,
        w: 7,
        h: 12,
        minW: 7,
        maxW: 15,
        minH: 12,
        maxH: 12,
      },
    ]);
  };
  const saveDashboard = () => {
    console.log({ currentLayouts });
    localStorage.setItem("layouts", JSON.stringify(currentLayouts));
    setIsDashboard(true);
  };
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={14}>
          <Button
            bordered={true}
            disabled={isDashboard}
            onClick={() => generateTable(layouts.length + 1)}
          >
            Genarate Table
          </Button>
          <Button
            bordered={true}
            disabled={isDashboard}
            onClick={() => generateForm(layouts.length + 1)}
          >
            Genarate Form
          </Button>
          <Button bordered={true} disabled={isDashboard} onClick={saveDashboard}>
            Save DashBoard
          </Button>

          <Button bordered={true} onClick={() => setIsDashboard(false)}>
            Edit
          </Button>
          <Button
            bordered={true}
            disabled={isDashboard}
            onClick={() => {
              localStorage.setItem("layouts", JSON.stringify([]));
              setLayouts(JSON.parse(localStorage.getItem("layouts")));
            }}
          >
            Reset
          </Button>
        </Row>
      </div>
      <DraggableContainer
        layouts={layouts}
        isDashboard={isDashboard}
        setCurrentLayouts={(l) => setCurrentLayouts(l)}
      />
    </>
  );
};
export default Container;
