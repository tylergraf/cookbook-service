var lefetch = function(url, config){
  var defaultConfig = {
    headers: {
      'content-type': 'application/json'
    }
  };

  Object.assign(defaultConfig,config)

  return window.fetch(url, defaultConfig).then(function(res){if (res.status !== 204 && res.status < 400) return res.json()});
}
var baseUrl = 'http://localhost:3000';

window.CookbookService = {
  categories: function(){
    return lefetch(baseUrl+'/api/categories');
  },
  subcategories: function(id){
    return lefetch(baseUrl+'/api/subcategories/'+id);
  },
  recipes: function(id){
    return lefetch(baseUrl+'/api/recipes/'+id);
  },
  allRecipes: function(){
    return lefetch(baseUrl+'/api/recipes/all');
  },
  recipe: function(id){
    return lefetch(baseUrl+'/api/recipe/'+id);
  },
  updateRecipe: function(recipe){
    var config = {
      method: 'put',
      body: JSON.stringify(recipe)
    }
    return lefetch(baseUrl+'/api/recipe/'+recipe._id, config);
  },
  newRecipe: function(recipe){
    var config = {
      method: 'post',
      body: JSON.stringify(recipe)
    }
    return lefetch(baseUrl+'/api/recipe/new', config);
  }
}
