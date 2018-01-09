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

  lang : any[] = ["pineapple", "apples", "tomatoes", "water"];

  langDetail : any[] = [
    {name : 'Angular2'},
    {name : 'React'},
    {name : 'React Native'},
    {name : 'Javascript'},
    {name : 'HTML5'},
    {name : 'CSS'},    
  ];

  addList(newList){
    console.log(1)
    this.lang.push(newList);
    //$('li').append('<li>'+newList+'</li>')
  }

  deleteData(event){
    let deleteTxt = event.currentTarget;
    let deleteParent = deleteTxt.parentElement;
    deleteParent.remove();
  }
}