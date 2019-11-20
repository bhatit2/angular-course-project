import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        AlertComponent,
        DropdownDirective
    ],
    imports : [
        CommonModule
    ],
    exports : [
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        AlertComponent,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent]
})

export class SharedModule {

}