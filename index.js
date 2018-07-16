var ingredient
var amount

var recipes = { [ingredient]: amount}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  Object.assign({}, recipes, { [ingredient]: amount })
  return recipes
}