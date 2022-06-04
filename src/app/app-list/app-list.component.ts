import { Component, OnInit } from '@angular/core';
import { AppItem } from './app-list.component.model';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.less']
})
export class AppListComponent implements OnInit {

  appItems: AppItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.populateAppList();
  }

  private populateAppList() {
    this.appItems = [
      {link: '',isActive: false, color:'text-white',subheading:'Random Hex Color Generator', background: 'blue', name: 'Color Generator', description: 'Random Hex Color Generator' },
      {link: '',isActive: false, color:'text-white',subheading:'Random Number Generator', background: 'indigo', name: 'Number Generator', description: 'Random Number Generator' },
      {link: '',isActive: false, color:'text-white',subheading:'Counter Number App', background: 'red', name: 'Number App', description: 'Counter Number App' },
      {link: '',isActive: false, color:'text-white',subheading:'Border Radius Controller', background: 'orange', name: 'Border Radius', description: 'Border Radius Controller' },
      {link: '',isActive: false, color:'text-white',subheading:'Box Shadow Controller', background: 'yellow', name: 'Box Shadow', description: 'Box Shadow Controller' },
      {link: '',isActive: false, color:'text-white',subheading:'Image Filter', background: 'green', name: 'Image Filter ', description: 'Image Filter (when we click on the button)' },
      {link: '',isActive: false, color:'text-white',subheading:'Background changer using HTML Color Picker', background: 'purple', name: 'Color Picker', description: 'Background changer using HTML Color Picker' },
      {link: '',isActive: false, color:'text-white',subheading:'Click To Download Something', background: 'cyan', name: 'Download', description: 'Click To Download Something' },
      {link: '',isActive: false, color:'text-white',subheading:'Background Choosing With Images or Gradients', background: 'gray', name: 'Background Choosing', description: 'Background Choosing With Images or Gradients' },
      {link: '',isActive: false, color:'text-dark', subheading:'Auto Year Update In The Footer Section', background: 'white', name: 'Year Update In Footer', description: 'Auto Year Update In The Footer Section' },
      {link: '',isActive: false, color:'text-white',subheading:'Date CountDown', background: 'green', name: 'Date CountDown', description: 'Date CountDown' },
      {link: '',isActive: false, color:'text-white',subheading:'Time CountDown', background: 'pink', name: 'Time CountDown', description: 'Time CountDown' },
      {link: '',isActive: false, color:'text-white',subheading:'Smooth Scrolling', background: 'purple', name: 'Smooth Scrolling', description: 'Smooth Scrolling' },
      {link: '',isActive: false, color:'text-white',subheading:'Responsive NavBar (Hamburger Button)', background: 'pink', name: 'Responsive NavBar', description: 'Responsive NavBar (Hamburger Button)' },
      {link: '',isActive: false, color:'text-white',subheading:'Random Password Generator', background: 'red', name: 'Password Generator', description: 'Random Password Generator' },
      {link: '/bmi',isActive: true, color:'text-white',subheading:'Body Mass Index Calculator', background: 'yellow', name: 'BMI Calculator', description: 'Body Mass Index Calculator' },
      {link: '',isActive: false, color:'text-white',subheading:'Notes App', background: 'orange', name: 'Notes App', description: 'Notes App' },
      {link: '',isActive: false, color:'text-white',subheading:'To-Do App', background: 'gray', name: 'To-Do App', description: 'To-Do App' },
      {link: '',isActive: false, color:'text-white',subheading:'Calculator App', background: 'purple', name: 'Calculator App', description: 'Calculator App' },
      {link: '',isActive: false, color:'text-white',subheading:'Digital Clock', background: 'yellow', name: 'Digital Clock', description: 'Digital Clock' },
      {link: '',isActive: false, color:'text-white',subheading:'Password Hide And Show', background: 'green', name: 'Password Hide And Show', description: 'Password Hide And Show' },
      {link: '',isActive: false, color:'text-white',subheading:'Password Strength Checker', background: 'indigo', name: 'Password Strength Checker', description: 'Password Strength Checker' },
      {link: '',isActive: false, color:'text-white',subheading:'Currency Converter', background: 'gray', name: 'Currency Converter', description: 'Currency Converter' },
      {link: '',isActive: false, color:'text-white',subheading:'Alert & Notification boxes', background: 'cyan', name: 'Alert & Notification', description: 'Alert & Notification' },
      {link: '',isActive: false, color:'text-white',subheading:'Website Preloader Implementation', background: 'teal', name: 'Website Preloader', description: 'Website Preloader Implementation' },
      {link: '',isActive: false, color:'text-white',subheading:'Temperature Converter', background: 'green', name: 'Temperature Converter', description: 'Temperature Converter' },
      {link: '/character-counter',isActive: true, color:'text-white',subheading:'Character Counter based on text', background: 'indigo', name: 'Character Counter', description: 'Character Counter' },
      {link: '',isActive: false, color:'text-white',subheading:'Age Calculator(Years/Months/Day)', background: 'orange', name: 'Age Calculator', description: 'Age Calculator(Years/Months/Day)' },
      {link: '',isActive: false, color:'text-white',subheading:'Length Converter (KM, M, CM, etc.)', background: 'pink', name: 'Length Converter', description: 'Length Converter App(KM, M, CM, etc.)' },
      {link: '',isActive: false, color:'text-white',subheading:'Auto Image Change Of The Background After A Defined Time', background: 'blue', name: 'Auto Image Change', description: 'Auto Image Change Of The Background After A Defined Time' },
      {link: '',isActive: false, color:'text-white',subheading:'Contact Form', background: 'orange', name: 'Contact Form', description: 'Contact Form' },
      {link: '',isActive: false, color:'text-white',subheading:'Text To Speech', background: 'yellow', name: 'Text To Speech', description: 'Text To Speech' },
      {link: '',isActive: false, color:'text-dark', subheading:'Search Something with different search engines', background: 'white', name: 'Search with search engines', description: 'Search Something with different search engines' },
      {link: '',isActive: false, color:'text-white',subheading:'Find The Location Of A User', background: 'pink', name: 'Find your location', description: 'Find The Location Of A User' },
      {link: '',isActive: false, color:'text-white',subheading:'Internet Connection Speed Checker', background: 'purple', name: 'Internet speed', description: 'Internet Connection Speed Checker' },
      {link: '',isActive: false, color:'text-white',subheading:'Slider Or Carousel', background: 'red', name: 'Slider Or Carousel', description: 'Slider Or Carousel' },
      {link: '',isActive: false, color:'text-white',subheading:'Scroll Bottom To Top', background: 'green', name: 'Scroll Bottom To Top', description: 'Scroll Bottom To Top' },
      {link: '',isActive: false, color:'text-white',subheading:'Random Joke Generator', background: 'cyan', name: 'Random Joke', description: 'Random Joke Generator' },
      {link: '',isActive: false, color:'text-white',subheading:'Alarm App', background: 'blue', name: 'Alarm', description: 'Alarm App' },
      {link: '',isActive: false, color:'text-white',subheading:'Toast Notification box', background: 'gray-600', name: 'Toast Notification', description: 'Toast Notification' },
      {link: '',isActive: false, color:'text-white',subheading:'Page Progress Bar', background: 'gray-700', name: 'Page Progress', description: 'Page Progress' },
      {link: '',isActive: false, color:'text-white',subheading:'Find Keyboard Keys Name', background: 'orange', name: 'Keyboard Keys Name', description: 'Find Keyboard Keys Name' },
    ];
  }


  private getRandom() {
    const colors = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', '']
  }
}
