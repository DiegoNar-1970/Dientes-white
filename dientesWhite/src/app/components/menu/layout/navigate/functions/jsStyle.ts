const toggleClass = (
  element: HTMLElement,
  add: string[],
  remove: string[]
): void => {
  add.forEach((cls) => element.classList.add(cls));
  remove.forEach((cls) => element.classList.remove(cls));
};

export const seeMenuResponsive = () => {
  const menu = document.querySelector('.menu_responsive') as HTMLElement;
  const see = document.querySelector('.see') as HTMLElement;
  const hide = document.querySelector('.hide') as HTMLElement;
  if (menu && see && hide) {
    toggleClass(
      menu,
      ['fixed', 'sm:flex', 'md:hidden'],
      ['hidden', 'sm:hidden']
    );
    toggleClass(see, ['hidden'], ['flex', 'sm:flex']);
    toggleClass(hide, ['flex', 'sm:flex'], ['hidden', 'sm:hidden']);
  }
  return;
};

export const hideMenuResponsive = (): void => {
  let menu = document.querySelector('.menu_responsive') as HTMLElement;
  let see = document.querySelector('.see') as HTMLElement;
  let hide = document.querySelector('.hide') as HTMLElement;
  if (menu && see && hide) {
    toggleClass(
      menu,
      ['hidden', 'sm:hidden', 'md:hidden'],
      ['fixed', 'flex', 'sm:flex', 'md:flex']
    );
    toggleClass(see, ['flex', 'sm:flex'], ['hidden']);
    toggleClass(
      hide,
      ['hidden', 'sm:hidden', 'md:hidden'],
      ['flex', 'sm:flex', 'md:flex']
    );
  }
  return;
};
