import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List App';

  constructor() {
      this.closeElmt = "\u00D7";
  }

  closeElmt : string;

  lang : any[] = [
    {name : 'Angular2'},
    {name : 'React'},
    {name : 'React Native'},
    {name : 'Javascript'},
    {name : 'HTML5'},
    {name : 'CSS'},    
  ];

  addList(newList){
    this.lang.push(newList);
    console.log(this.lang);
  }

  deleteData(event){
    let deleteTxt = event.currentTarget;
    let deleteParent = deleteTxt.parentElement;
    deleteParent.remove();
  }
}