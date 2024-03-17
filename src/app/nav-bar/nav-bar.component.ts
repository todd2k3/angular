import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  pageList:any[] = [
    {
      "route": 'home',
      "title": 'Home'
    },
    {
      "route": "about",
      "title": "About"
    },
    {
      "route": "infrastructure",
      "title": "Infrastructure"
    },
    {
      "route": "contact",
      "title": "Contact"
    }
  ];
}
