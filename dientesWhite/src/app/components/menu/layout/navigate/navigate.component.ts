import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { hideMenuResponsive, seeMenuResponsive } from './functions/jsStyle';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterLink,MatIconModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  seeMenuResponsive = seeMenuResponsive;
  hideMenuResponsive = hideMenuResponsive;
}
