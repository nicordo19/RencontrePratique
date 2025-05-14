import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {


}
