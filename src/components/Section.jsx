import React from "react";

const Section = (props) => {
  return (
    <div id="section">
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Last Name:</th>
            <th>Age:</th>
            <th>Id:</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
