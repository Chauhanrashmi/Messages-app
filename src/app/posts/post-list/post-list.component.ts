import { Component,OnInit, OnDestroy } from '@angular/core';
import {Post} from '../post.model'
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit , OnDestroy{
  // posts=[
  //   {
  //     title:"First Message",content:"Here is your first message",description:"'The best is yet to be'"
  //   },
  //   {
  //     title:"Second Message",content:"Here is your Second message",description:"Be thankful for what you have; you’ll end up having more"
  //   },
  //   {
  //     title:"Third Message",content:"Here is your Third message",description:"Be thankful for what you have; you’ll end up having more"
  //   }
  // ];
  posts:Post[]=[];
  private postsSub: Subscription;

  constructor(public postsService:PostsService){}

  ngOnInit(){
  this.posts = this.postsService.getPosts();
  this.postsSub = this.postsService.getPostUpdateListener()
  .subscribe((posts: Post[])=> {
    this.posts = posts;
  });
}

ngOnDestroy(){
  this.postsSub.unsubscribe();
};
}
