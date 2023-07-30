import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output('onChangeMenu') onChangeMenu = new EventEmitter<boolean>();
  isMenuOpen = false;

  toggleMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
    this.onChangeMenu.emit(this.isMenuOpen);
  }
}
