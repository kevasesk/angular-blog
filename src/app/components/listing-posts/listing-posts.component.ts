import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-posts',
  templateUrl: './listing-posts.component.html',
  styleUrls: ['./listing-posts.component.css']
})
export class ListingPostsComponent implements OnInit {

  posts = [
    {
      title: 'Quote',
      desc: 'The system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, ',
      author: 'Arthur'
    },
    {
      title: 'Quote',
      desc: 'Circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
      author: 'Lisa'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
