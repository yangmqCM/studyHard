import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'
@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
