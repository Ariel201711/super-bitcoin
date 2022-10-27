import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() contact!: Contact
  @Output() remove = new EventEmitter<string>()

  ngOnInit(): void {
  }

  onRemoveContact() {
    this.remove.emit(this.contact._id)
}

onEditContact(ev:MouseEvent) {
    // ev.stopPropagation()
    this.router.navigate(['/edit', this.contact._id])
}

}
