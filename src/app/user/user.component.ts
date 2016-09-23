import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sub:any;
  user;

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this._hackerNewsAPIService.fetchUser(id).subscribe(data => {
        this.user = data;
      }, 
      () => console.log('Error getting user ' + id));
    });
  }

}
