import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  readonly url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://us-central1-squid-apis.cloudfunctions.net/test-front-basic'
  }

getFeed() {
  return this.http.get(this.url);
}

}

