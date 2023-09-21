import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public commentMinLength = 100
  public commentMaxLength = 1000

  public contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    type: ['', Validators.required],
    comments: ['', [Validators.required, Validators.minLength(this.commentMinLength)]]
  })

  public typeOptions = [
    { value: 'person', label: 'Persona' },
    { value: 'bussines', label: 'Empresa' }
  ]

  constructor(private fb: FormBuilder) {}

  public getError(control: FormControl): string {
    if (control.errors!['required']) return 'Campo obligatorio'
    if (control.errors!['email']) return 'Email inválido'
    if (control.errors!['minlength']) return `Mínimo ${this.commentMinLength} caracteres. Actuales: ${control.errors!['minlength'].actualLength}/${this.commentMaxLength}`
    return 'Error'
  }

  public submitForm(): void {
    console.log(this.contactForm.value)
  }

}
