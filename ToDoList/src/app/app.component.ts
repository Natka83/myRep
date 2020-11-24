import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:
  // `<div>"Patience is a key element of success"</div>
  //     <ol>
  //       <li> If you think your teacher is tough, wait till you get a boss </li>
  //       <li> Life is not fair — get used to it! </li>
  //       <li> Success is a lousy teacher. It seduces smart people into thinking they can’t lose </li>
  //       <li> Be nice to nerds. Chances are you’ll end up working for one </li>
  //     </ol>
  //   <div>Bill Gates<div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
}
