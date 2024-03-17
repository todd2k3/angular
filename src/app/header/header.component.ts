import { Component, Input } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AdminComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input()
  sitetitle: string = ""

  @Input()
  tagline: string = ""
}
