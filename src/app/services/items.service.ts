import { Item } from './../models/item';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  collectionItems: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;


  constructor( public afs: AngularFirestore) {

    //  MANEIRA SIMPLES DE PEGAR DADOS DO FIREBASE, VEM SEM O ID PQ NÃO MAPEIA. SIMPLE WAY TO GET FIREBASE DATA... DON'T MAP AND DON'T GET ID
    //  this.items = this.afs.collection('items').valueChanges();
    
    //passo a coleção para poder add // Collection to ADD item
    this.collectionItems = this.afs.collection('items', ref => ref.orderBy('title','asc'));
  
      
    //GEt ITEMS WITH ID
    this.items = this.collectionItems.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
      
  
     }


   getItems(){
     return this.items;
   }

   addItem(item: Item){ 
    this.collectionItems.add(item);
   }

   deleteItem(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
   }


   updateItem(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
   }

}
