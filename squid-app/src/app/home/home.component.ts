import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { Router } from '@angular/router';
import IFeed from '../model/feed.model';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public feed$!: Observable<IFeed[]>;

  constructor(private feedService: FeedService, private router: Router) {}

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed() {

    setTimeout(() => {
      this.feed$ = this.feedService.getFeed();
    }, 2000);

  }

  redirectToImage(url: string) {
    this.router.serializeUrl(this.router.createUrlTree([url]));
    window.open(url, '_blank');
  }
}
