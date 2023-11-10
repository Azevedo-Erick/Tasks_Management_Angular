import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciASenhaComponent } from './esqueci-a-senha/esqueci-a-senha.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

const routes: Routes = [{
  path: "login",
  component: LoginComponent
},
{
  path: "cadastro",
  component: CadastroComponent
},
{
  path: "esqueci_a_senha",
  component: EsqueciASenhaComponent
},
{
  path: "alterar_senha",
  component: AlterarSenhaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
