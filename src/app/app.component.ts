import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  imgUrl = "../assets/BL_logo_square_jpg.jpg"
  url = "https://www.bridgelabz.com"
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
  }

  onClick($event) {
    console.log("image is clicked",  $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("change event occured", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";
  }
}
