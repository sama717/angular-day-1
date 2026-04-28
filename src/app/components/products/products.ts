import { Component, signal, computed} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  selectedBrand = signal('All');
  products = signal([
    {
      id:1,
      img:'https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwf1f0c444/nk/938/6/9/e/2/3/93869e23_0dba_425d_b20b_b12893181d68.jpg?sw=700&sh=700&sm=fit&q=100&strip=false',
      brand:'Nike',
      name:'Air Max Pulse',
      price: 149,
      inStock:true
    },
    {
      id:2,
      img:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/3faa5029e332454382c3f62d06d6595e_9366/IH7828_01_standard.jpg',
      brand:'Adidas',
      name:'Forum Low',
      price: 119,
      inStock:true
    },
    {
      id:3,
      img:'https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358',
      brand:'New Balance',
      name:'550 White Green',
      price: 109,
      inStock:false
    },
    {
      id:4,
      img:'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6615ad40-4678-487c-9786-80fb23539258/AIR+JORDAN+1+LOW.png',
      brand:'Jordan',
      name:'Air Jordan 1 Low',
      price: 179,
      inStock:true
    }
  ]);

  filteredProducts = computed(()=>{
    if (this.selectedBrand() === 'All') {
      return this.products();
    } else {
      return this.products().filter(p => p.brand === this.selectedBrand());
    }
  });

  filterProducts(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedBrand.set(value);
  }

  showAlert(product:string){
    alert(product);
  }
}
