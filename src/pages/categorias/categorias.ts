import { CategoriaDTO } from './../../models/categoria.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { API_CONFIG } from '../../config/api.config';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items : CategoriaDTO[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService,
    public storage: StorageService
    ) {
  }



  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(response => {
      this.items = response;
    },
    error => {
      if (error.status == 404) {
        this.storage.setLocalUser(null);
        this.navCtrl.setRoot('HomePage');
      }
     }); 
  }

}
