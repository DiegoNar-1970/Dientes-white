import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[OnMauseMove]',
  standalone: true
})
export class OnMauseMoveDirective implements AfterViewInit{
  @Input() tiltSpeed = 9;

  constructor(private el:ElementRef) { }

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    element.addEventListener('mousemove', (event: MouseEvent) => {
      const boxRect = element.getBoundingClientRect();
      const centerX = boxRect.left + boxRect.width / 2;
      const centerY = boxRect.top + boxRect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const rotateX = deltaY / this.tiltSpeed;
      const rotateY = -deltaX / this.tiltSpeed;

      gsap.to(element, {
        duration: 0.5,
        rotateX: rotateX,
        rotateY: rotateY,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: 'power2.out',
      });
    });
  }
}

//viewChild sirve para traer la referencia de un elemento del dom  
  // ElementRef proporciona a la referencia pero no es directamente el elemento HTMLElement 
  // y el ! es para decirle a ts que confie en que este elemento existira antes de ser usado 
  // @ViewChild('box') box!: ElementRef;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ngAfterViewInit(): void {
    
  //   if (isPlatformBrowser(this.platformId)) {
  //     if (this.box) {
  //       //para acceder al elemento como un HTMLElement se debe de poner esto nativeElement
  //       //se puede interactuar y agregarle clases eliminar clases etc 
  //       const boxElement = this.box.nativeElement;

  //       boxElement.addEventListener('mousemove', (event: MouseEvent) => {
  //         //getBoundingClientRect esta funcion trae informacion de la ubicacion del mause 
  //         const boxRect = boxElement.getBoundingClientRect();
  //         const centerX = boxRect.left + boxRect.width / 2;
  //         const centerY = boxRect.top + boxRect.height / 2;
  //         const deltaX = event.clientX - centerX;
  //         const deltaY = event.clientY - centerY;
  //         const rotateX = deltaY / 9;
  //         const rotateY = -deltaX / 9;

  //         gsap.to(boxElement, {
  //           duration: 0.5,
  //           rotateX: rotateX,
  //           rotateY: rotateY,
  //           ease: 'power2.out',
  //         });
  //       });

  //       boxElement.addEventListener('mouseleave', () => {
  //         gsap.to(boxElement, {
  //           duration: 0.9,
  //           rotateX: 0,
  //           rotateY: 0,
  //           ease: 'power2.out',
  //         });
  //       });
  //     }
  //   }
  // }