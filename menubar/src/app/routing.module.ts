import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ReportsComponent } from './reports/reports.component';
import { NamesComponent } from './names/names.component';
import { FileNameListComponent } from './file-name-list/file-name-list.component';

const routes: Routes = [
  {path: 'app-forms', component: FormsComponent,
    children: [
      {path: 'app-file-name-list', component: FileNameListComponent},
      {path: 'app-names', component: NamesComponent},
    ]
  },
  {path: 'app-reports', component: ReportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
