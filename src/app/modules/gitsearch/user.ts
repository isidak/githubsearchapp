import {Expose} from 'class-transformer';

export class User {
  @Expose({name: 'login'})
  login: string;
  @Expose({name: 'name'})
  name: string;
  @Expose({name: 'company'})
  company: string;
  @Expose({name: 'email'})
  email: string;
  @Expose({name: 'followers'})
  followers: number;
  @Expose({name: 'updated_at'})
  updatedAt: string;
  @Expose({name: 'avatar_url'})
  avatarUrl: string;
  @Expose({name: 'repos_url'})
  reposUrl: string;
}
