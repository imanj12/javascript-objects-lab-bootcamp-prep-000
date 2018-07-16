var recipe = {}
var ingredient
var amount

function updateObjectWithKeyAndValue(recipe, ingredient, amount) {
  Object.assign({}, recipe, { [ingredient]: amount })
  return recipe
}