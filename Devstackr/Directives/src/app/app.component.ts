import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testBoolean: boolean = false;

  collectionOfStrings: string[] = ["Lorem ipsum", "Hello world", "Foo", "Bar", "Blah"]

  onButtonClick(){
    this.testBoolean = !this.testBoolean;
  }

}

