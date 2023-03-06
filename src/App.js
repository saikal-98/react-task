import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  let [users, setUsers] = useState([
    { id: 1, name: "John", lastName: "Smith", age: 26 },
    { id: 2, name: "Amelia", lastName: "Brown", age: 25 },
    { id: 3, name: "Emily", lastName: "Walker", age: 17 },
    { id: 4, name: "Harry", lastName: "Johnson", age: 30 },
  ]);

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
