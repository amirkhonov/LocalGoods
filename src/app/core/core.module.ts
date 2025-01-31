import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkWithHref } from "@angular/router";
import { LogoComponent } from './header/logo/logo.component';
import { GreetingComponent } from './header/greeting/greeting.component';
import { NavComponent } from './header/nav/nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    GreetingComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
