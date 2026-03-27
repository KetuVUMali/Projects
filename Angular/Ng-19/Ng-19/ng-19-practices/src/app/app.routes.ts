import { Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CustomComponent } from './custom-Component/custom-Component.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { CounterAppComponent } from './A - Practices/counter-app/counter-app.component';
import { EventsComponent } from './events/events.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { SignalsComponent } from './signals/signals.component';

export const routes: Routes = [
    {path:'interpolation', component : InterpolationComponent},
    {path:'custom-component', component:CustomComponent},
    {path:'function', component:ButtonClickComponent},
    {path:'practices/counter-app', component:CounterAppComponent},
    {path:'events', component:EventsComponent},
    {path:'structural-directives', component:StructuralDirectivesComponent},
    {path:'signals', component:SignalsComponent}
];
