import { Component, inject, OnInit } from '@angular/core';
import { ContactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

    // constructor(private contactService: ContactService) { }
    contactService: ContactService
    constructor() {
        this.contactService = inject(ContactService)
    }

    filterBy!: ContactFilter

    ngOnInit(): void {
        this.contactService.filterBy$.subscribe(filterBy => {
            this.filterBy = filterBy
        })
    }


    onSetFilter() {
        // console.log('this.filterBy:', this.filterBy);
        this.contactService.setFilter(this.filterBy)

    }

}
