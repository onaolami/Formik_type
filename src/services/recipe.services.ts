import { Axios, AxiosResponse } from "axios";
import apiInstance from "./apiInstance.service";
import { IRecipe } from "../types/recipe.types";

class RecipeService {
  getAllRecipe(): Promise<AxiosResponse<{recipes:IRecipe[]}>> {
    return apiInstance.get("/recipes");
  }
}
const recipeService = new RecipeService();

export default recipeService;
