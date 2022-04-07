import { Component } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public feed = [];
  constructor(private feedService: FeedService) {
    this.feedService.getFeed().subscribe((data: any) => {
      this.feed = data
    });
  }
}
