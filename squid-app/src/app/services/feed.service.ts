import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IFeed from 'src/app/model/feed.model';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  readonly url: string;

  constructor(private http: HttpClient) {
    this.url =
      'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic';
  }

  getFeed(): Observable<IFeed[]> {
    return this.http.get<IFeed[]>(this.url);
  }
}
