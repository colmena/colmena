import { Directive, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '.nav-dropdown',
})
export class NavDropdownDirective {
  @HostBinding('class.open') private _open: boolean = false

  /**
   * Checks if the dropdown menu is open or not.
   */
  isOpen(): any {
    return this._open
  }

  /**
   * Opens the dropdown menu.
   */
  open(): void {
    this._open = true
  }

  /**
   * Closes the dropdown menu .
   */
  close(): void {
    this._open = false
  }

  /**
   * Toggles the dropdown menu.
   */
  toggle(): void {
    if (this.isOpen()) {
      this.close()
    } else {
      this.open()
    }
  }
}

/**
 * Allows the dropdown to be toggled via click.
 */
@Directive({
  selector: '.nav-dropdown-toggle',
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault()
    this.dropdown.toggle()
  }
}
