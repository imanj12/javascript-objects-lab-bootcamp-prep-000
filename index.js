var ingredient
var amount

var recipes = {}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  Object.assign({}, recipes, { [ingredient]: amount })
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount
  return recipes
}

