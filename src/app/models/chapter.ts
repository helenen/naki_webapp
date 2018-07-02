export class Chapter {
  id: number;
  title: string;
  text: string;
  exemple: string;

  constructor(id?: number, exemple?: string, text?: string, title?: string) {
  this.id = id;
  this.title = title;
  this.text = text;
  this.exemple = exemple;
  }
}
