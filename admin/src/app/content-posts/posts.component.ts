import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Post, FireLoopRef} from '../shared/sdk/models';
import {RealTime} from '../shared/sdk/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {

  private post: Post = new Post();
  private posts: Observable<Post[]>;
  private reference: FireLoopRef<Post>;

  constructor(private rt: RealTime) {
    this.reference = this.rt.FireLoop.ref<Post>(Post);
    this.posts = this.reference.on('changes');
  }

  upsert(): void {
    if (this.post.id) {
      this.reference.upsert(this.post).subscribe();
      this.new();
    } else {
      this.reference.create(this.post).subscribe(() => this.post = new Post());
    }
  }

  select(post: Post): void {
    this.post = post;
  }

  remove(post: Post): void {
    this.reference.remove(post).subscribe();
  }

  new(): void {
    this.post = new Post();
  }
}
