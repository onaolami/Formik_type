import { useEffect, useState } from "react";
import { IRecipe } from "../../types/recipe.types";

import recipeService from "../../services/recipe.services";

const GetAllRecipe = () => {
  const [recipes, setRecipes] = useState <IRecipe | >([]);
  useEffect(() => {
    recipeService
      .getAllRecipe()
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>ingredients</th>
          <th>instructions</th>
          <th>prepTimeMinutes</th>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipes.id}>
                <td>{recipes.id}</td>
                <td>{recipes.name}</td>
                <td>{recipes.ingredients}</td>
                <td>{recipes.instructions}</td>
                <td>{recipes.prepTimeMinutes}</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default GetAllRecipe;
