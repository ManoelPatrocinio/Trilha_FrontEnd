import { computed, Injectable, signal } from '@angular/core';
import { type_product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  listInicial: type_product[] = [];
  carrinho = signal<type_product[]>(this.listInicial);
  constructor() { }

  
}
