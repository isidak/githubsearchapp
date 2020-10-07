import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../modules/gitsearch/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    openRepos(userName: string){
    this.router.navigate(['/repos', userName] ).then();
    }
}
