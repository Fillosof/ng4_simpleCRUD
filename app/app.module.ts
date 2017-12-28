import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './nav/nav.component';

import { ModalModule } from 'ngx-bootstrap';

import { UserService } from './user/user.service'

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   ModalModule.forRoot()
                   ],
  declarations: [ AppComponent,
                          UserComponent,
                          NavbarComponent
                          ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }