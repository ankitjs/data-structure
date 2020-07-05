import { Component } from "@angular/core";
import { LinkedList } from "./linkedList/linkedList";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string;
  constructor() {
    const linkedList = new LinkedList(10);
    linkedList.append(5);
    linkedList.append(16);
    linkedList.prepend(1);
    linkedList.insert(99, 2);
    console.log("before----->", linkedList.printList());
    linkedList.remove(2);
    console.log("after----->", linkedList.printList());
  }
}
