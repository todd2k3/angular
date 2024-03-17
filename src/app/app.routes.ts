import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'infrastructure', component: InfrastructureComponent},
    {path: 'contact', component: ContactComponent}
];
