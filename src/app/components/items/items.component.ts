import { Item } from './../../models/item';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(public itemService: ItemsService) { }

  ngOnInit() {
this.getAllItems();

  }



  getAllItems(){
    this.itemService.getItems().subscribe(items=> {
      this.items = items;
      console.log(this.items);
    },error=>{console.log(error);})
  }

  deleteItem(event, item: Item){
    this.itemService.deleteItem(item);
    this.clearState();
  }

  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

}
