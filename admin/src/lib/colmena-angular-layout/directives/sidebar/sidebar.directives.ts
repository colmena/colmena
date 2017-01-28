import { Directive, HostListener } from '@angular/core'

/**
 * Allows the sidebar to be toggled via click.
 */
@Directive({
  selector: '.sidebar-toggle',
})
export class SidebarToggleDirective {

  // Check if element has class
  private static hasClass(target: any, elementClassName: string): boolean {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className)
  }

  // Toggle element class
  private static toggleClass(elem: any, elementClassName: string): void {
    let newClass: string = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' '
    if (SidebarToggleDirective.hasClass(elem, elementClassName)) {
      while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
        newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' )
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
    } else {
      elem.className += ' ' + elementClassName
    }
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault()

    let bodyClass: any = localStorage.getItem('body-class')

    if (SidebarToggleDirective.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
      SidebarToggleDirective.toggleClass(document.querySelector('body'), 'sidebar-opened')
      SidebarToggleDirective.toggleClass(document.querySelector('html'), 'sidebar-opened')
    } else if (SidebarToggleDirective.hasClass(document.querySelector('body'), 'sidebar-nav') || bodyClass === 'sidebar-nav') {
      SidebarToggleDirective.toggleClass(document.querySelector('body'), 'sidebar-nav')
      localStorage.setItem('body-class', 'sidebar-nav')
      if (bodyClass === 'sidebar-nav') {
        localStorage.clear()
      }
    }
  }
}

@Directive({
  selector: '[mobile-nav-toggle]',
})
export class MobileSidebarToggleDirective {

  // Check if element has class
  private static hasClass(target: any, elementClassName: string): boolean {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className)
  }

  // Toggle element class
  private static toggleClass(elem: any, elementClassName: string): void {
    let newClass: string = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' '
    if (MobileSidebarToggleDirective.hasClass(elem, elementClassName)) {
      while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
        newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' )
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
    } else {
      elem.className += ' ' + elementClassName
    }
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault()
    MobileSidebarToggleDirective.toggleClass(document.querySelector('body'), 'mobile-open')
  }
}

/**
 * Allows the off-canvas sidebar to be closed via click.
 */
@Directive({
  selector: '.sidebar-close',
})
export class SidebarOffCanvasCloseDirective {
  // Check if element has class
  private static hasClass(target: any, elementClassName: string): boolean {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className)
  }

  // Toggle element class
  private static toggleClass(elem: any, elementClassName: string): void {
    let newClass: string = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' '
    if (SidebarOffCanvasCloseDirective.hasClass(elem, elementClassName)) {
      while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
        newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' )
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
    } else {
      elem.className += ' ' + elementClassName
    }
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault()

    if (SidebarOffCanvasCloseDirective.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
      SidebarOffCanvasCloseDirective.toggleClass(document.querySelector('body'), 'sidebar-opened')
    }
  }
}
