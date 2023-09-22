import { Component } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private getNotionPage

  constructor(functions: Functions) {
    this.getNotionPage = httpsCallable(functions, 'getNotionPage')

  }
  
  public async notion() {
    const n = await this.getNotionPage()
    console.log(n)
  }
}
