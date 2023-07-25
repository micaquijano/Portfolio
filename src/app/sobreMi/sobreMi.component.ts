import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})


export class SobreMiComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}

/* constructor(private router: Router  ) {}

goContacts() {
  this.router.navigate(['/contactos']);
} */