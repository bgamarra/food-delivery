import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css', '../delivery-form/delivery-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() titulo: string;
  constructor() { }

  ngOnInit() {
  }

}
