import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gitresponse} from '../gitresponse';
import {plainToClass} from 'class-transformer';
import {RepoModel} from '../repo.model';
import {Observable} from 'rxjs';
import {User} from '../user';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getUsers(user: string) {
    const url = `${this.baseUrl}users/${user}`;
    return this.http.get<Gitresponse>(url).pipe(
      map(res => plainToClass(User, res, { excludeExtraneousValues: true }))
    );
  }

  getRepos(link: string): Observable<RepoModel[]> {
    return this.http.get<any[]>(`${this.baseUrl}users/${link}/repos`).pipe(
      map((response) => plainToClass(RepoModel, response, {excludeExtraneousValues: true}))
    );
  }

}
