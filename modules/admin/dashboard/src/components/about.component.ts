import { Component } from '@angular/core'

@Component({
  selector: 'app-about',
  template: `
    <div class="row">
      <div class="col-md-10 offset-md-1">

        <ui-card class="branding" classNames="card-outline-secondary">
          <ui-card-content>
            <ui-logo></ui-logo>
            <h4>API Development Platform</h4>
            <h5 class="text-center">
              <span class="text-muted text-uppercase font-weight-bold">
                <i class="icon-social-github"></i>
                <a target="_blank" href="https://github.com/colmena/colmena">GitHub</a>
              </span>
              <span class="text-muted text-uppercase font-weight-bold">
                <i class="fa fa-slack"></i>
                <a target="_blank" href="https://colmena-slack.now.sh">Slack</a>
              </span>
            </h5>

          </ui-card-content>
        </ui-card>

        <ui-card class="giants" classNames="card-outline-primary pb-2">
          <ui-card-content>
            <p>Colmena is standing on the shoulders of giants</p>
            <div class="col-md-4" *ngFor="let giant of giants">
              <div class="card card-giant">
                <div class="card-block text-center">
                  <div class="h2 text-muted text-center mb-2">
                    {{giant.name}}
                  </div>
                  <small class="text-muted text-uppercase font-weight-bold">
                    <a [href]="giant.link">{{giant.link}}</a>
                  </small>
                </div>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <ui-card classNames="card-outline-success">
          <ui-card-content>
            <div class="p-2">
              <h4>Backers</h4>
              Support us with a monthly donation and help us continue our activities.
              <div>
                <a target="_blank" href="https://opencollective.com/colmena/backer/0/website"><img
                  src="https://camo.githubusercontent.com/c0dc43615fecb6b6b7ac4146b01065289f0a9420/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f636f6c6d656e612f6261636b65722f302f6176617461722e737667"
                  data-canonical-src="https://opencollective.com/colmena/backer/0/avatar.svg" style="max-width:100%;"></a>
              </div>
            </div>
            <div class="p-2">
              <h4>Sponsors</h4>
              Become a sponsor and get your logo and link to your site HERE and on the README on Github.
              <div>
                <a target="_blank" href="https://opencollective.com/colmena/sponsor/0/website"><img
                  src="https://camo.githubusercontent.com/06a53ae7a23b3126348bcdc4dd2d423458dac50b/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f636f6c6d656e612f73706f6e736f722f302f6176617461722e737667"
                  data-canonical-src="https://opencollective.com/colmena/sponsor/0/avatar.svg"
                  style="max-width:100%;"></a>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <ui-card classNames="card-outline-info">
          <ui-card-content class="legal">
            <p>
              The MIT License (MIT)
            </p>
            <p>
              Copyright (c) 2014-2017 Bram Borggreve
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in
              all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
              THE SOFTWARE.
            </p>
          </ui-card-content>
        </ui-card>

      </div>
    </div>
  `,
  styles: [
    `
    .branding ui-logo {
      margin: 30px 0;
      display: block;
    }

    .branding h4 {
      margin: 30px 0;
      color: #243447;
      text-align: center;
    }

    .branding h5 {
      margin: 50px 0 30px;
      text-align: center;
    }

    .branding h5 span {
      margin: 0 20px;
    }

    .giants {
      padding-bottom: 20px;
    }

    .giants p {
      margin: 20px 0 30px;
      text-align: center;
    }

    .text-center {
      text-align: center;
    }

    .card-giant {
      margin-bottom: 0;
    }

    .legal {
      font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
  `,
  ],
})
export class AboutComponent {
  public giants = [
    {
      name: 'LoopBack',
      link: 'https://loopback.io',
    },
    {
      name: 'Angular',
      link: 'https://angular.io',
    },
    {
      name: 'CoreUI',
      link: 'https://coreui.io',
    },
  ]
}
