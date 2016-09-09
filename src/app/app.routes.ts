import { provideRouter } from '@angular/router'
import { LoginRootComponent } from './components/login-root'
import { HomeRootComponent } from './components/home-root'
import { TrendDetailRootComponent } from './components/trend-detail-root'
import { RegisterComponent } from './register'
import { HomePageComponent } from './home-page'
import { ProfileComponent } from './components/profile'
import { TrendsComponent } from './components/trends'
import { DashHomeComponent } from './components/dash-home'
import { MytrendsComponent } from './components/mytrends'
import { NewTrendComponent } from './components/new-trend'
import { TrendServiceService } from './services/trend-service.service'
// resolvers
import { trendResolver } from './resolvers/trend.resolve'


const APP_ROUTES = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginRootComponent }, 
    { path: 'register', component: RegisterComponent },
    { path: 'dash', component: HomeRootComponent,
        children: [
            { path: '', component: DashHomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'mytrends', component: MytrendsComponent, 
                resolve: {
                    trends: trendResolver
                } 
            },
            { path: 'new', component: NewTrendComponent },
            { path: 'trends', component: TrendsComponent, 
                children: [
                    { path: '', component: MytrendsComponent },
                    { path: ':id', component: TrendDetailRootComponent },
                ]
            }
        ]
     }
]

export const APP_ROUTES_PROVIDER = [
    trendResolver,
    TrendServiceService,
    provideRouter(APP_ROUTES)
]