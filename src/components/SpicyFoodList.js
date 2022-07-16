import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [ filterBy, setFilterBy] = useState("ALL");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "ALL"){
      return True
    } else {
      return food.cuisine === filterBy;
    }
  })

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    console.log(newFood);
    setFoods(newFoodArray)
  }
  function handleLiClick(id){
    const newFoodArray  = foods.filter(food => food.id !== id);
    setFoods(newFoodArray);
  }
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id}  onClick = {(() => handleLiClick(food.id))}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
