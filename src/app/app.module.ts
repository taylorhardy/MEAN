import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';

import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatMenuModule, MatSidenavModule, MatSelectModule, MatDatepickerModule, MatRadioModule} from '@angular/material';


const appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'policy/:name', component: PolicyComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
      MatButtonModule,
      MatCheckboxModule,
      MatAutocompleteModule,
      MatMenuModule,
      MatSidenavModule,
      MatSelectModule,
      MatDatepickerModule,
      MatRadioModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
