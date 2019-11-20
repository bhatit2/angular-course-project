import { NgModule } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingListRoutingModule } from './shopping-list.routing.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ShoppingListRoutingModule
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ]
})

export class ShoppingListModule {
    
}