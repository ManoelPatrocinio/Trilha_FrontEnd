import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroSuinosComponent } from './pages/cadastro-suinos/cadastro-suinos.component';
import { ListagemSuinosComponent } from './pages/listagem-suinos/listagem-suinos.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EdicaoSuinoComponent } from './pages/edicao-suino/edicao-suino.component';
import { RegisterPesoComponent } from './pages/register-peso/register-peso.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"register-suino", component: CadastroSuinosComponent},
    {path:"list-suino", component: ListagemSuinosComponent},
    {path:"detail-suino/:id", component: ListagemSuinosComponent},
    {path:"edit-suino/:id", component: EdicaoSuinoComponent},

    {path:"register-peso/:id", component: RegisterPesoComponent},

    {path:"login", component: LoginComponent},
    {path:"register", component: CadastroUsuarioComponent},

];
