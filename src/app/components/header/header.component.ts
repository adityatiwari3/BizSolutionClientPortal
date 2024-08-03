import { Component } from '@angular/core';
import { CustomDropdownComponent } from '../custom-dropdown/custom-dropdown.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CustomDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
