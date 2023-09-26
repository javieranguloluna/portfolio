import { Component, OnInit } from '@angular/core';
import { Functions, HttpsCallable, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private getNotionPage: HttpsCallable<void,any>

  public notionPage!: { title: string, blocks: { text: string, link: string }[] }

  constructor(functions: Functions) {
    this.getNotionPage = httpsCallable(functions, 'getNotionPage')
  }
  async ngOnInit(): Promise<void> {
    this.notionPage = await this.notion()
  }
  
  private async notion() {
    const notionPage = await this.getNotionPage()
    return {
      title: notionPage.data.page.properties.title.title.map((t: any) => t.text.content),
      blocks: notionPage.data.blocks.results.flatMap((b: any) => {
        if (b.paragraph) return b.paragraph.rich_text.map((t: any) => ({text: t.plain_text, link: t.href }))
        return { text: '', link: '' }
      })
    }
  }

  public openLink(link: string): void {
    window.open(link, '_blank')
  }

}
