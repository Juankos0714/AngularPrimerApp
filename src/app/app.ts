import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly ficha = signal(283);
  protected readonly programa =signal("ADSO")
  protected readonly nombres = signal("Juan Camilo")
  protected readonly profile = signal("assets/profile.jpg")
}
export class content{
  protected readonly FirstContent = signal("Portfolio");

}

