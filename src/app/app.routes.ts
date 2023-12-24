import { Routes } from '@angular/router';
import { ListingPageComponent } from './components/listing-page/listing-page.component';
import { ListingDetailPageComponent } from './components/listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { MyListingsPageComponent } from './components/my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './components/new-listing-page/new-listing-page.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'listings',
        pathMatch: 'full'
    },

    {
        path: 'listings',
        component: ListingPageComponent,
        pathMatch: 'full'
    },

    {
        path: 'listings/:id',
        component: ListingDetailPageComponent,
    },

    {
        path: 'contact/:id',
        component: ContactPageComponent,
    },

    {
        path: 'edit-listing/:id',
        component: EditListingComponent,
    },

    {
        path: 'my-listings',
        component: MyListingsPageComponent,
    },

    {
        path: 'new-listing',
        component: NewListingPageComponent,
    },
];
