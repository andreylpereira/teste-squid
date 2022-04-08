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
    //Timeout apenas para apresentação de loader
    setTimeout(() => {
      this.feed$ = this.feedService.getFeed();
    }, 1000);
  }

  redirectToImage(url: string) {
    if (url !== '' && url !== undefined && url !== null) {
      this.router.serializeUrl(this.router.createUrlTree([url]));
      window.open(url, '_blank');
      return true;
    } else {
      return false;
    }
  }
}
