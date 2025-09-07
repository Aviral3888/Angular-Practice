import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'New Title';
  public name = 'Aviral';

  public heading_class = "heading";
  public image_alt = "Image Description";
  public counterValue = 0;
  public projectName = "Initial"

  public counterAdd() {
    this.counterValue++;
  }
}
