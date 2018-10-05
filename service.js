import {fetch} from './fetch.js';

export default class CookbookService {
  constructor(baseUrl = 'https://gretchenscookbook-api.herokuapp.com'){
    this.baseUrl = baseUrl;
  }
  async categories(){
    return await fetch(`${this.baseUrl}/api/categories`);
  }
  async subcategories(id){
    return await fetch(`${this.baseUrl}/api/subcategories/${id}`);
  }
  async recipes(id){
    return await fetch(`${this.baseUrl}/api/recipes/${id}`);
  }
  async recipe(id){
    return await fetch(`${this.baseUrl}/api/recipe/${id}`);
  }
  async updateRecipe(recipe){
    let config = {
      method: 'put',
      body: JSON.stringify(recipe)
    }
    return await fetch(`${this.baseUrl}/api/recipe/${recipe._id}`, config);
  }
  async newRecipe(recipe){
    let config = {
      method: 'post',
      body: JSON.stringify(recipe)
    }
    return await fetch(`${this.baseUrl}/api/recipe/new`, config);
  }
}
