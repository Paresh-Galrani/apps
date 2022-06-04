import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.less']
})
export class CharacterCounter implements OnInit {

  characters: string = '';
  totalSpaces: number = 0;
  totalCharacters: number = 0;
  constructor() {
  }

  ngOnInit(): void {

  }

  onKeyUp(): void {
    this.totalSpaces = this.characters.split(' ').length - 1;
  }

  count(): void {
    this.totalCharacters = this.characters.length;
  }

  clear(): void {
    this.characters = '';
    this.totalCharacters = 0;
    this.totalSpaces = 0;
  }
}