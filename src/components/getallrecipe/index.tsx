import { useEffect, useState } from "react";
import { IRecipe } from "../../types/recipe.types";

import recipeService from "../../services/recipe.services";

const GetAllRecipe = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    recipeService
      .getAllRecipe()
      .then((response) => {
        setRecipes(response.data.recipes);
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
        </thead>
        
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>{recipe.prepTimeMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllRecipe;
