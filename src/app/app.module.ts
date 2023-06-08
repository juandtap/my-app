import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { LeftSideBarComponent } from './template/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './template/right-side-bar/right-side-bar.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
//import { DatabaseFirestore } from './services/database.service';
import { environment } from 'src/environments/environment.development';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule} from '@angular/material/table';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    ContactListComponent,
    SettingsComponent,
    HomeComponent,
    AboutComponent,
    EditContactComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductEditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  providers: [/*DatabaseFirestore*/
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// function provideFirebaseApp(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
//   throw new Error('Function not implemented.');
// }

// function getFirestore() {
//   throw new Error('Function not implemented.');
// }

// function initializeApp(arg0: any): any {
//   throw new Error('Function not implemented.');
// }

// function provideFirestore(arg0: () => void): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
//   throw new Error('Function not implemented.');
// }

