import { Component } from '@angular/core';
import { NavigateComponent } from "../../components/menu/layout/navigate/navigate.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
