import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { LibrosService } from './services/libros.service';


//COMPONENTES
import { AppComponent } from './app.component';	
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BooksCardComponent } from './components/books-card/books-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    SidebarComponent,
    BooksCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
