
import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


export const applicatonRoutes :  Routes = [
    {path :'home', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path :'contacts', component:ContactComponent},
    {path :'**', component:PageNotFoundComponent}
]