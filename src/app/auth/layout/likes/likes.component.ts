import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-likes',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {

}
