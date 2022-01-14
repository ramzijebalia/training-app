import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { AdminModule } from './admin/admin.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const appRoutes: Routes = [
 {
 path: 'list',
 component: SessionItemListComponent},
 {
 path: 'admin',
 loadChildren: () => import('./admin/admin.module').then(m =>AdminModule)
 },
 { path: '', redirectTo: '/list', pathMatch: 'full' },
 { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent
  ],
  imports: [RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
