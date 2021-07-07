import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared';
import {
  ConfirmOrderComponent,
  GroupItemComponent,
  GroupShortListComponent,
  PaymentComponent,
  ProductAmountComponent,
  ProductContainerComponent,
  ProductVariantDialogComponent
} from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    PaymentComponent,
    ConfirmOrderComponent
  ],
  imports: [SharedModule, ProductRoutingModule],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule {
}
