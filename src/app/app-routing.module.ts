import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';


const routes: Routes = [
  {path:"", component: ContactListComponent},
  {path:"pages/contactlist", component: ContactListComponent},
  {path:"pages/settings", component: SettingsComponent},
  {path:"pages/home", component: HomeComponent},
  {path: "pages/about", component: AboutComponent},
  {path: "pages/editcontact", component : EditContactComponent},
  {path: "pages/productlist", component: ProductListComponent},
  {path: "pages/productform", component: ProductFormComponent},
  {path: "pages/productedit", component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
