import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../modules/gitsearch/services/search.service';
import {User} from '../../modules/gitsearch/user';
import {Observable, throwError} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  login: string;
  user$: Observable<User>;
  errorMessage: string = null;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  searchUsers(login) {
    this.login = login;
    this.user$ = this.searchService.getUsers(this.login).pipe(
      catchError( (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
      return throwError(err);
    })
  );
  }

}
