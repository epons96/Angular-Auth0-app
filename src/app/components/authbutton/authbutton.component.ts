import { Component, Inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-authbutton',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="btn btn-outline-danger" (click)="auth.logout({ returnTo: document.location.origin })">
        Salir
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="btn btn-outline-success" (click)="auth.loginWithRedirect()">Ingresar</button>
    </ng-template>
  
  `,
})
export class AuthbuttonComponent {

  constructor( @Inject(DOCUMENT) public document: Document ,public auth: AuthService) { }

}
