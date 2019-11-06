import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService) { }
    private recipes: Recipe[] = [
        new Recipe(
            'Masala Dosa',
            'South indian dish made with soaked rice & udad daal, stuffed with spicy potato mash',
            '',
            [new Ingredient('dosa batter', 1), new Ingredient('potato', 2), new Ingredient('onion', 2)]
        ),
        new Recipe(
            'Hara bhara Paneer Tikka',
            'Cottage cheese cubes well marinated and barbequed',
            '',
            [new Ingredient('cottage cheese', 2), new Ingredient('green chutney', 1)]
        )
    ];
    getRecipes() {
        return this.recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient) => {
            this.slService.addIngredient(ingredient);
        });
    }
}
