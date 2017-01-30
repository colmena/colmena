import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../../app.shared.module'

import { PostFormComponent } from './post-form.component'
import { PostListComponent } from './post-list.component'

import { PostsService } from './posts.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    PostFormComponent,
    PostListComponent,
  ],
  providers: [
    PostsService,
  ],
})
export class PostsModule {
  moduleLink = {
    weight: 20, label: 'Posts', icon: 'icon-pencil', link: [ '/', 'content', 'posts' ]
  }
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'APP_CONTENT_DASHBOARD', payload: this.moduleLink})
  }
}
