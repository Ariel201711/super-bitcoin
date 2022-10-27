import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { lastValueFrom } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  contact!: Contact
  contactService = inject(ContactService)
  pageTitle:string = ''

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      if (contact) {
        this.contact = contact
        this.pageTitle = 'Edit Contact' 
      } else {
        this.contact = this.contactService.getEmptyContact() as Contact
        this.pageTitle = 'Add Contact' 
      }
    })
  }

  async onSaveContact() {
    await lastValueFrom(this.contactService.saveContact(this.contact))
    this.router.navigateByUrl('/contact')
}

}
