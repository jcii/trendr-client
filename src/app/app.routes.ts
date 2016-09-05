import { provideRouter } from '@angular/router'
import { LoginRootComponent } from './components/login-root'
import { HomeRootComponent } from './components/home-root'
import { TrendDetailRootComponent } from './components/trend-detail-root'
import { RegisterComponent } from './register'
import { HomePageComponent } from './home-page'
import { ProfileComponent } from './components/profile'
import { TrendsComponent } from './components/trends'

const APP_ROUTES = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginRootComponent }, 
    { path: 'register', component: RegisterComponent },
    
    { path: 'dash', component: HomeRootComponent,
        children: [
            { path: '', component: HomeRootComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'trends', component: TrendsComponent }, 
            { path: 'trend', component: TrendDetailRootComponent, 
                children: [
                    { path: '', component: TrendDetailRootComponent },
                    { path: ':id', component: ProfileComponent }
                ]
            }
        ]
     }
]

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
]