import { provideRouter } from '@angular/router'
import { LoginRootComponent } from './components/login-root'
import { HomeRootComponent } from './components/home-root'
import { TrendDetailRootComponent } from './components/trend-detail-root'

const APP_ROUTES = [
    {path: '', component: LoginRootComponent}, 
    {path: 'user', component: LoginRootComponent},
    {path: 'home', component: HomeRootComponent},
    {path: 'trend/:trendId', component: TrendDetailRootComponent}
]


export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
]