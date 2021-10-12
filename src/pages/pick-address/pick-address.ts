import { EnderecoDTO } from './../../models/endereco.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Dr. Manoel Moreira",
        numero: "300",
        complemento: "",
        bairro: "Centro",
        cep: "151615",
        cidade: {
          id: "1",
          nome: "Unberlandia",
          estado: {
            id: "1",
            nome: "Minas Gerais"          
          }
        }
      }
    ]
  }

}
