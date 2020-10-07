import {Expose} from 'class-transformer';

export class RepoModel {
  @Expose({name: 'full_name' })
  fullName: string;
  @Expose({name: 'description'})
  description: string;
  @Expose({name: 'git_url' })
  gitUrl: string;
  @Expose({name: 'forks_count' })
  forksCount: number;
  @Expose({name: 'watchers_count' })
  watchersCount: number;

}
