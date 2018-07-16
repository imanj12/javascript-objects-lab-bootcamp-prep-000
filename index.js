var recipes = {}
var ingredient
var amount

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  Object.assign(recipes, recipes, { [ingredient]: amount })
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount
  return recipes
}

function deleteFromObjectByKey(recipes, ingredient) {
  
}