import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receivedChildMessage: string = ""
  messageToSendToParent: string = "wo"

  sendMessageToChild(message: string) {
    this.messageToSendToParent = message
  }

  getMessage(message: string) {
    this.receivedChildMessage = message
  }

}
