import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public searchResult: any;
  public searchForm: FormGroup = new FormGroup({
    input: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  public searchGitHubUsersByName(): void {
    const url =
      'https://api.github.com/search/users?q=' +
      this.searchForm.get('input').value;

    this.searchGitHubByUrl(url);
  }

  public searchGitHubByUrl(url: string): void {
    this.http
      .get(url, {
        observe: 'response'
      })
      .pipe(
        mergeMap((result: any) => {
          const users = result.body.items.map((item: any) =>
            this.http.get(item.url)
          );

          return forkJoin(users).pipe(
            map(usersArray => {
              result.body.items.forEach((item: any, index: number) => {
                item.metadata = usersArray[index];
              });

              return result;
            })
          );
        })
      )
      .subscribe(result => {
        this.searchResult = {
          links: this.parseLinkHeader(result.headers.get('link')),
          body: result.body
        };
      });
  }

  private parseLinkHeader(linkHeader: string): Map<string, string> {
    const linkMap = new Map();

    if (linkHeader !== null) {
      const linkHeaderParts: string[] = linkHeader.split(',');

      linkHeaderParts.forEach(linkHeaderPart => {
        const linkHeaderSection: string[] = linkHeaderPart.split(';');
        const action: string = linkHeaderSection[1]
          .replace(/rel="(.*)"/, '$1')
          .trim();
        const url: string = linkHeaderSection[0].replace(/<(.*)>/, '$1').trim();

        linkMap.set(action, url);
      });
    }

    return linkMap;
  }

  /**
   * This utilizes Capacitor to open a URL in an in-app browser on iOS or Android,
   * and if the app is running as a PWA then it will simply open a new tab.
   *
   * @param url The URL that the browser will open
   */
  public async openUrl(url: string): Promise<void> {
    await Browser.open({ url });
  }
}
