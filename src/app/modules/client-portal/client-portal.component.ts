import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ChangeNavState } from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/interfaces/interfaces';
import 'firebase/firestore';

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.scss']
})
export class ClientPortalComponent implements OnInit {
  private clientCollection: AngularFirestoreCollection<Client>;
  private clients: Observable<Client[]>;
  constructor(private store: Store, private db: AngularFirestore) {
    this.clientCollection = this.db.collection<Client>('Clients');
    this.clients = this.clientCollection.valueChanges();
  }
  ngOnInit() {
    this.store.dispatch(new ChangeNavState('client'));
  }

}
