import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { NuevaEducacionComponent } from './componentes/nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { NuevaExperienciaComponent } from './componentes/nueva-experiencia/nueva-experiencia.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'editar_experiencia/:id', component: EditarExperienciaComponent},
  {path:'editar_persona', component: EditarPersonaComponent},
  {path:'editar_proyectos', component: EditarProyectosComponent},
  {path:'nueva_experiencia', component: NuevaExperienciaComponent},
  {path:'nueva_educacion', component: NuevaEducacionComponent},
  {path:'editar_experiencia', component: EditarExperienciaComponent},
  {path:'editar_educacion/:id', component: EditarEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
