import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { Competitions } from '../components/competitions/competitions.component';
import { TeamsComponent } from '../components/teams/teams.component';

import { NavResolver } from '../resolvers/nav.resolver';
import { CompetitionsResolver } from '../resolvers/competitions.resolver';
import { TeamsResolver } from '../resolvers/teams.resolver';

const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'competitions/:id',
        component: Competitions,
         resolve: {
            competition: CompetitionsResolver
        }
    },
    
    {
        path: 'teams/:id',
        component: TeamsComponent,
         resolve: {
            team: TeamsResolver
        }
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);