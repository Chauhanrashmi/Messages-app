import { Component,Input } from '@angular/core';
import {Post} from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
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
  @Input() posts:Post[]=[];
}
