import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router,
  ) {}

  async navTo() {
    this.router.navigateByUrl('/sample').then();
  }

  async createActionSheet() {
     const actionSheet = await this.actionSheetController.create({
      header: 'header',
      translucent: true,
      buttons: this.setupActionButtons()
    });
    actionSheet.present().then();
  }

  setupActionButtons() {
    return [
      {
        text: 'SAMPLE',
        icon: 'bar-chart',
        handler: async () => await this.navTo(),
      }
    ];
  }
}
