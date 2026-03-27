import { Component } from "@angular/core";

@Component({
    selector : 'app-custom-component',
    template: '<h1> Custom Component </h1> <h2>{{name}}</h2>',                    // HTML File Or Tag
    styles:'h1{ color:red; font-size:20px; } h2{background-color:blue; font-size:20px;}',                  // CSS  File Or Style
    imports:[]                                                  // Imports
})

export class CustomComponent{
    name=" Custom Component"
}