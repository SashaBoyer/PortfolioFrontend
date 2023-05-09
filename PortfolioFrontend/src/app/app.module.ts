import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms'
import { interceptorProvider } from './servicios/interceptor-service';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarHardComponent } from './componentes/editar-hard/editar-hard.component';
import { EditarSoftComponent } from './componentes/editar-soft/editar-soft.component';
import { EditarIdiomasComponent } from './componentes/editar-idiomas/editar-idiomas.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { NuevaEducacionComponent } from './componentes/nueva-educacion/nueva-educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditarExperienciaComponent,
    EditarPersonaComponent,
    EditarEducacionComponent,
    EditarHardComponent,
    EditarSoftComponent,
    EditarIdiomasComponent,
    EditarProyectosComponent,
    NuevaEducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
