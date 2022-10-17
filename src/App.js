import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import SweetAlert from "react-bootstrap-sweetalert";

import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Configuration /> */}
      <MyTabs />
    </div>
  );
}

export default App;


const Label1 = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const handleDelete = () => {
    setShowAlert(false)
  }
  return (
    <GridContainer style={{ height: ' 500px'}}>
      {showAlert ? <MyAlert text={"Label1 popup"} confirm={handleDelete} setShowAlert={setShowAlert}/> : null } 
      <Button style={{ height: ' 100px', margin: '20px'}} variant="contained" color="primary" onClick={() => setShowAlert(true)}>
        alert1
      </Button>
    </GridContainer>
  )
}

const Label2 = () => {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleDelete = () => {
    setShowAlert(false)
  }
  return (
    <GridContainer style={{ height: ' 500px'}}>
      {showAlert ? <MyAlert text={"Label2 popup"} confirm={handleDelete} setShowAlert={setShowAlert}/> : null } 
      <Button style={{ height: ' 100px', margin: '20px'}} variant="contained" color="primary" onClick={() => setShowAlert(true)}>
        alert2
      </Button>
    </GridContainer>
  )
}

const Label3 = () => {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleDelete = () => {
    setShowAlert(false)
  }
  return (
    <GridContainer style={{ height: ' 500px'}}>
      {showAlert ? <MyAlert text={"Label3 popup"} confirm={handleDelete} setShowAlert={setShowAlert}/> : null } 
      <Button style={{ height: ' 100px', margin: '20px'}} variant="contained" color="primary" onClick={() => setShowAlert(true)}>
        alert3
      </Button>
    </GridContainer>
  )
}

function MyTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1"><Label1 /></TabPanel>
        <TabPanel value="2"><Label2 /></TabPanel>
        <TabPanel value="3"><Label3 /></TabPanel>
      </TabContext>
    </Paper>
  );
}

function NavPills(props) {
  const [active, setActive] = React.useState(0);
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = index => {
    setActive(index);
  };

  const { tabs, direction, alignCenter } = props;
  
  const tabButtons = (
    <Tabs
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
          />
        );
      })}
    </Tabs>
  );

  const tabContent = (
    <div>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
        style={{ overflowY: "hidden" }}
      >
        {tabs.map((prop, key) => {
          return (
            <div key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );

  return (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}


const Configuration = props => {
  return (
    <NavPills
      color="primary"
      tabs={[
        {
          tabButton: "Tab 1",
          tabContent: <Label1 />
        },
        {
          tabButton: "Tab 2",
          tabContent: <Label2 />
        },
        {
          tabButton: "Tab 3",
          tabContent: <Label3 />
        },
      ]}
    />
  );
};



const MyAlert = ({text, confirm, setShowAlert}) => {
  return (
    <SweetAlert
      warning
      style={{ display: "block", marginTop: "10px"  }}
      title="Are you sure?"
      onConfirm={() => {
        confirm();
      }}
      onCancel={() => setShowAlert(false)}
      confirmBtnText="Yes, delete it!"
      cancelBtnText="Cancel"
      showCancel
    >
      { text }
    </SweetAlert>
  )
}