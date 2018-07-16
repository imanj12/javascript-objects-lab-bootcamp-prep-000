var recipes = {}
var ingredient
var amount

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  Object.assign({}, recipes, { [ingredient]: amount })
  return recipes
}