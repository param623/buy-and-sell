import { Component } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  standalone: true,
  imports: [ListingDataFormComponent],
  templateUrl: './edit-listing.component.html',
  styleUrl: './edit-listing.component.css'
})
export class EditListingComponent {

  constructor(
    private router: Router
  ) {}
  onSubmit(): void {
    alert('Saving changes to the listing');
    this.router.navigateByUrl('/my-listings');
  }
}
