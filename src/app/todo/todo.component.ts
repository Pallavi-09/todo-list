import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { this.closeElmt = "\u00D7";}

  ngOnInit() {
  }
  
  title = 'ToDo List App';
  closeElmt : string;
  checkedToggle : Boolean = false;
  size = 16;
  showText = 1230;

  lang : any[] = [
    { "name" : "pineapple"},
    { "name" : "apples"},
    { "name" : "tomatoes"},
    { "name" : "water"}
  ];

  bgColor : any[] = ["color1","color2","color3","color4","color5"]
  
  addList(newList){
    this.lang.push({"name": newList});
  }

  deleteData(txt,event){
    event.stopPropagation();
    let deleteTxt = event.currentTarget;
    let deleteParent = deleteTxt.parentElement;
    let textParent = txt.split(" ")[0];

    this.lang = this.lang.filter(function(item) { 
      return item.name !== textParent;  
    });
    deleteParent.remove();
  }

  checkedTitle(e){
    let liTxt = e.currentTarget.classList.toggle('checked');
  }

  backColor(e){
    e.stopPropagation();    
    let target = e.currentTarget.parentElement.parentElement.attributes.class.nodeValue;
    let indexAry = this.bgColor.indexOf(target);
    let nextIndex;
    if(indexAry >= 4){
      nextIndex = 0;
    }
    else{
      nextIndex = indexAry+1;
    }
    let classActive = this.bgColor[nextIndex];
    
    e.currentTarget.parentElement.parentElement.classList.remove(target);
    
    e.currentTarget.parentElement.parentElement.classList.add(classActive);
  
  }

  fontDec(e){
    e.stopPropagation();
    this.size = this.size - 1;
  }

  fontInc(e){
    e.stopPropagation();    
    this.size = this.size + 1;
  }

  editFunc(e){
    e.stopPropagation();
    this.showText != this.showText;
  }
}
