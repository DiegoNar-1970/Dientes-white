import { Component } from '@angular/core';
import { DirectionsComponent } from "../layout/directions/directions.component";
import { NavigateComponent } from "../layout/navigate/navigate.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavigateComponent, DirectionsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
