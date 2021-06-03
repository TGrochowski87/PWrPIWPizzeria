import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PizzaInfo from "./PizzaInfo";
import ComposeBlock from "./ComposeBlock";
import ComposeWindow from "./ComposeWindow";
import { auth, getPizzas } from "../../utils/Firebase";

const MenuList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [composing, setComposing] = useState(false);

  useEffect(async () => {
    const pizzasData = await getPizzas();

    let pizzasArray = [];

    pizzasData.forEach((doc) => {
      pizzasArray.push(doc.data());
      //console.log(doc.data());
    });

    setPizzas(pizzasArray);
  }, []);

  return (
    <>
      <ComposeWindow composing={composing} setComposing={setComposing} />
      <div className="menu">
        {pizzas.map((pizza) => (
          <PizzaInfo key={uuidv4()} pizza={pizza} />
        ))}
        <ComposeBlock setComposing={setComposing} />
      </div>
    </>
  );
};

export default MenuList;
