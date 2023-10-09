import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroTopComponent } from './components/hero-top/hero-top.component';
import { HeroMdComponent } from './components/hero-md/hero-md.component';
import { HeroBottomComponent } from './components/hero-bottom/hero-bottom.component';
import { CriarTopicoComponent } from './components/criar-topico/criar-topico.component';
import { FormTopicoComponent } from './components/form-topico/form-topico.component';
import { EnviarTopicoComponent } from './components/enviar-topico/enviar-topico.component';
import { BottomPostsComponent } from './components/bottom-posts/bottom-posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarMobileComponent } from './components/topbar-mobile/topbar-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HeroTopComponent,
    HeroMdComponent,
    HeroBottomComponent,
    CriarTopicoComponent,
    FormTopicoComponent,
    EnviarTopicoComponent,
    BottomPostsComponent,
    FooterComponent,
    TopbarMobileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
