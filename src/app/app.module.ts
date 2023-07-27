import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


//Material
import { MaterialModule } from './material/material.module'

//Component 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobreMi/sobreMi.component';
import { ContactosComponent } from './contactos/contactos.component';

//ruteo
const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobreMi', component: SobreMiComponent },
  { path: 'contactos', component: ContactosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    SobreMiComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }