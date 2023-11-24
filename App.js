import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import TabView from "./components/TabView/TabView";
import ListBox from "./components/ListBox/ListBox";
import {countryList} from './util/countries'
import AddressComp from "./components/Address/AddressComp";


const COL_NAMES = ["name", "age", "subject", "grade"];
const LIST = [
  { name: "Jim", age: 25, subject: "Algebra", grade: 68 },
  { name: "Tiffany", age: 19, subject: "Biology", grade: 92 },
  { name: "Harry", age: 21, subject: "World History", grade: 81 },
  { name: "Gustavo", age: 24, subject: "Algebra", grade: 75 },
  { name: "Sue", age: 40, subject: "Biology", grade: 89 },
];

const StudentTable = (
  <Table
    title="Students"
    list={LIST}
    colNames={COL_NAMES}
    onDelete={(student) => console.log(student)}
    width="50%"
  />
);

const HelloList = <ListBox list={["Hello", "World", "!!!"]} widthPct={40} />;

class App extends Component {




  render() {
    return (
      <div className="App">
        <div className="center">
          <ListBox
            list={countryList}
          />
        </div>
        <AddressComp></AddressComp>
      </div>
    );
  }
}

export default App;
