import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterAtendComponent } from './pages/register-atend/register-atend.component';
import { ListAtendComponent } from './pages/list-atend/list-atend.component';
import { EditAtendComponent } from './pages/edit-atend/edit-atend.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"resgister-atend", component: RegisterAtendComponent},
  {path:"list-atend", component: ListAtendComponent},
  {path:"edit-atend/:id", component: EditAtendComponent},
  {path:"register-product", component: RegisterProductComponent },
];
