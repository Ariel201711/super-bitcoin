import { HomeComponent } from './pages/home/home.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  { path: 'contact/edit/:id', component: ContactEditComponent, /* Later I'll use a contact resolver*/ },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsComponent, /* Later I'll use a contact resolver and a canactivate [AuthGuard]*/ },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'stat',
    component: StatisticComponent
  },
  {
    path: '',
    component: HomeComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
