import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../../../modules/gitsearch/services/search.service';
import {Subscription} from 'rxjs';
import {RepoModel} from '../../../modules/gitsearch/repo.model';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  currentUserReposList: RepoModel[];
  userLogin: string;

  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.repoSubscription();
  }

  getReposName(){
   return this.route.params.pipe(
     filter((params) => !!params.name),
     map((params) => params.name)
   );
  }

  getRepos(login){
   return this.searchService.getRepos(login);
  }

  repoSubscription() {
    const reposSub = this.getReposName().pipe(
      switchMap((name) => this.getRepos(name))
    ).subscribe((res) => this.currentUserReposList = res);
    this.subscription.add(reposSub);
  }

  sort(key){

    this.currentUserReposList.sort( (a, b) => {
        const nameA = Number.isInteger(a[key]) ? a[key] : a[key].toLowerCase();
        const nameB = Number.isInteger(b[key]) ? b[key] : b[key].toLowerCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameB < nameA) {
          return 1;
        }

        return 0;
      }
    );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
