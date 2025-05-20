import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-likes',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {

  likeMessage: string = "";

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {

    this.authService.getLikes().subscribe({
      next: (res: string) => {
        this.likeMessage = "accée autorisé"

        this.likeMessage = res;

      },
      error: (err) => {
        if(err.status === 401){

          this.router.navigate(['login']);
          this.likeMessage = " Accès refusé : vous devez être connecté";

        }else {
          this.router.navigate(['login']);
          this.likeMessage = "une erreur esr survenue !";
        }
      }
    });
}}
