import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'JAL Dev';

  public routes = [
    { label: 'Proyectos', path: 'proyectos' },
    { label: 'Sobre mi', path: 'sobre-mi' },
    { label: 'Contacto', path: 'procontactoyectos' }
  ]

  copyToClipboard() {
    const textArea = document.createElement("textarea");
    textArea.value = window.location.origin;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

}
