import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {ProductPageComponent} from '../product-page/product-page.component';
import { FsService } from '../fs.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  //items: Observable<any[]>;
  data = [];
  items = [];
  removedItems = [];

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {

  }

  pictures = [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      price: "29€"
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      price: "99€"
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      price: "75€"
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      price: "35€"
    }
  ];

  ngOnInit() {
    this.db.collection('items').valueChanges().subscribe(res => {
      //console.log(res);
      this.data = res;
      //console.log(this.data[0]);
      /* this.data.forEach(function(value){
        //console.log(value);
      }) */
      /* for (let i = 0; i < this.data.length; i++) {
        //console.log(this.data[i]);
      } */
      this.getProducts();
      })
      

  }

  getProducts(){
    for (let i = 0; i < 6; i++) {
      //console.log(this.data[i]);
      let randomItem = this.data[Math.floor(Math.random()*this.data.length)];
      
      while (this.removedItems.includes(randomItem)){
        randomItem = this.data[Math.floor(Math.random()*this.data.length)];
      }

      this.removedItems.push(randomItem);
      this.items.push(randomItem);
    }
    console.log(this.data);
    console.log(this.pictures);
  }
}

