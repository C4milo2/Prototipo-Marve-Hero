import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ComicsComponent } from './component/comics/comics.component';
import { FigurasComponent } from './component/figuras/figuras.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'comics', component: ComicsComponent},
    { path: 'figuras', component: FigurasComponent},
    { path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)