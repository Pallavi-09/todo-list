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
  checkedToggle : Boolean = false;

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
    this.lang.push(newList);
  }

  deleteData(txt,event){
    let deleteTxt = event.currentTarget;
    let deleteParent = deleteTxt.parentElement;
    let textParent = txt.split(" ")[0];
    let index = this.lang.indexOf(textParent);
    if (index !== -1) {
      this.lang.splice(index, 1);
    }   
    deleteParent.remove();
  }

  checkedTitle(e){
    let liTxt = e.currentTarget.classList.toggle('checked');
  }

}