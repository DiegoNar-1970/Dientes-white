import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterLink,MatIconModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {

    seeMenuResponsive(){
      let menu = document.querySelector('.menu_responsive') as HTMLElement;
      let see=document.querySelector('.see') as HTMLElement;
      let hide=document.querySelector('.hide') as HTMLElement;
      if(menu && see && hide) {
        menu
        menu.style.display='flex' 
        menu.style.position='fixed'
        see.style.display='none'
        hide.style.display='flex'
    }
      return;
    }

    hideMenuResponsive(){
      let menu = document.querySelector('.menu_responsive')as HTMLElement;
      let see=document.querySelector('.see') as HTMLElement;
      let hide=document.querySelector('.hide') as HTMLElement;
      if(menu && see && hide){
         menu.style.display='none'
         menu.style.position='none'
         see.style.display='flex'
         hide.style.display='none'
      }
      return;
    }
}
