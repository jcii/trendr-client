import { provideRouter } from '@angular/router'
import { LoginRootComponent } from './components/login-root'
import { HomeRootComponent } from './components/home-root'
import { TrendDetailRootComponent } from './components/trend-detail-root'
import { RegisterComponent } from './register'
import { HomePageComponent } from './home-page'

const APP_ROUTES = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginRootComponent }, 
    { path: 'dash', component: HomeRootComponent },
    { path: 'trend/:trendId', component: TrendDetailRootComponent },
    { path: 'register', component: RegisterComponent }
]

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
]