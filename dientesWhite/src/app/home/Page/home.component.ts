import {
  Component
} from '@angular/core';
import { NavigateComponent } from '../../components/menu/layout/navigate/navigate.component';
import { OnMauseMoveDirective } from '../directives/on-mause-move.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigateComponent,OnMauseMoveDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
}
// animate():void{
//   gsap.to('.box',{
//     scrollTrigger: {
//       trigger: '.box',
//       start: 'top center',
//       end: 'bottom 100px',
//       scrub: 1,
//       markers: true
//     },
//     x: 500,
//     rotation: 360,
//     duration: 3
//   })
// }