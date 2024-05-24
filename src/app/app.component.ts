import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PageContentComponent} from "./page-content/page-content.component";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageContentComponent, HeroBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sign Up';
}
