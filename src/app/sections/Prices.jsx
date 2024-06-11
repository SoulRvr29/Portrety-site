import React from "react";
import { Element } from "react-scroll";
const Prices = () => {
  return (
    <Element name="Cennik">
      <h2>Cennik</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi
        autem quam maxime soluta laborum nesciunt nam vitae veniam! Ab facilis
        dicta sunt ducimus tempore ipsa officia expedita corrupti. Molestiae.
        Quas, eum voluptatibus enim culpa beatae voluptates soluta, sint amet
        aliquam nulla libero, cupiditate consectetur velit?
      </p>
      <table className="table-auto border-2 border-light-accent dark:border-dark-accent text-3xl mx-auto uppercase font-bold ">
        <thead className="text-xl max-sm:text-xs">
          <tr>
            <th>format</th>
            <th>1 osoba</th>
            <th>2 osoby</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a5</td>
            <td>280</td>
            <td>-</td>
          </tr>
          <tr>
            <td>a4</td>
            <td>400</td>
            <td>500</td>
          </tr>
          <tr>
            <td>a3</td>
            <td>650</td>
            <td>700</td>
          </tr>
        </tbody>
      </table>
    </Element>
  );
};

export default Prices;
