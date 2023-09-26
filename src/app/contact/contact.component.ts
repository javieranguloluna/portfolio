import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Functions, HttpsCallable, httpsCallable } from '@angular/fire/functions';

interface Contact {
  name: string;
  email: string;
  phone: string;
  contactPreference: string;
  message: string;
}

interface SubmitResult {
  status: 'not-submitted' | 'pending' | 'submitted' | 'error';
  message: string;
}

interface SubmitError {
  message: string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  private submitContact: HttpsCallable<Partial<Contact>,any>

  public commentMinLength = 50
  public commentMaxLength = 500
  
  public submitResult: SubmitResult = {
    status: 'not-submitted',
    message: ''
  }

  public contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    contactPreference: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(this.commentMinLength)]]
  })

  public contactPreferenceOptions = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone_call', label: 'Llamada telefónica' },
    { value: 'email', label: 'Email' }
  ]

  constructor(private fb: FormBuilder,
              functions: Functions) {
    this.submitContact = httpsCallable(functions, 'submitContact')
  }

  public getError(control: FormControl): string {
    if (control.errors!['required']) return 'Campo obligatorio'
    if (control.errors!['email']) return 'Email inválido'
    if (control.errors!['minlength']) return `Mínimo ${this.commentMinLength} caracteres. Actuales: ${control.errors!['minlength'].actualLength}/${this.commentMaxLength}`
    return 'Error'
  }

  public async submitForm(): Promise<void> {
    this.submitResult.status = 'pending'
    console.log(this.contactForm.value)
    try {
      const submitted = await this.submitContact(this.contactForm.value)
      
    } catch (error: any) {
      console.error(error)
      this.submitResult = {
        status: 'error',
        message: error.message || 'Error desconocido'
      }
    }
  }

}
