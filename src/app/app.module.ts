import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TechnicalComponent } from './technical/technical.component';
import { TwoDArtComponent } from './two-dart/two-dart.component';
import { ThreeDModelsComponent } from './three-dmodels/three-dmodels.component'


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TechnicalComponent,
    TwoDArtComponent,
    ThreeDModelsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: '2DArt', component: TwoDArtComponent },
      { path: 'technical', component: TechnicalComponent },
      { path: '3DModels', component: ThreeDModelsComponent },
      
      
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
