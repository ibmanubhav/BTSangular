import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateBugFormComponent } from './create-bug-form/create-bug-form.component';
import { SearchBugsComponent } from './search-bugs/search-bugs.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdatebugComponent } from './updatebug/updatebug.component';
import { EllipsisPipe } from './TruncateCustomPipes';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateBugFormComponent },
  { path: 'search', component: SearchBugsComponent },
  { path: 'update', component: UpdatebugComponent },
];

@NgModule({
  declarations: [
    EllipsisPipe,
    AppComponent,
    HeaderComponent,
    CreateBugFormComponent,
    SearchBugsComponent,
    HomeComponent,
    UpdatebugComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
