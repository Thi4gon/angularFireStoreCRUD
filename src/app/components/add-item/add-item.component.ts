import { ItemsService } from './../../services/items.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  }


  constructor(private itemService: ItemsService) { }

  ngOnInit() {
  }


  onSubmit(){
    if (this.item.title != '' &&  this.item.description != ''){
      if (this.item.title != null &&  this.item.description != null || this.item.title != undefined &&  this.item.description != undefined){
        this.itemService.addItem(this.item);  
        this.item.title = '';
        this.item.description = '';

      }

    }
  }

}
