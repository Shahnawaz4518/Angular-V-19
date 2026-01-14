import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Aboutus } from './aboutus/aboutus';
import { Contactus } from './contactus/contactus';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
    //{path:'',redirectTo:'home',pathMatch:'full'},
    {path:'',component:Dashboard},
    {path:'home',component:Dashboard,title:'Home Page'},
    {path:'aboutus',component:Aboutus, title:'About Page'},
    {path:'contactus',component:Contactus, title:'Contact Page'},
    {path:'aboutusnew',component:Aboutus,outlet:'outlet2'},
    {path:'aboutusnew/:id',component:Aboutus,outlet:'outlet2'},
    {path:'**',component:Pagenotfound, title:'page not found'},

    

];
