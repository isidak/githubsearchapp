import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import {GitSearchComponent} from './git-search.component';
import {FormsModule} from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [GitSearchComponent, UserProfileComponent, SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ]
})
export class SearchModule { }
