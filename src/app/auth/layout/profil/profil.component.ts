import { Component, OnInit} from '@angular/core';

import {RouterOutlet,Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-profil',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {

  profileMessage: string = "";

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {

    this.authService.getProfile().subscribe({
      next: (res: string) => {
        this.profileMessage = "accée autorisé"

        this.profileMessage = res;

      },
      error: (err) => {
        if(err.status === 401){

          this.router.navigate(['login']);
          this.profileMessage = " Accès refusé : vous devez être connecté";

        }else {
          this.router.navigate(['login']);
          this.profileMessage = "une erreur esr survenue !";
        }
      }
    });
  }

}
