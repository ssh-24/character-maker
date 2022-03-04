import { ABILITY, JOB } from "../data.js";
import Person from "./Person.js";

export default class Character extends Person {
  job;
  ability;

  constructor({ job, ability, hair, body }) {
    super(hair, body);
    this.job = job;
    this.ability = ability;
  }

  changeJob(job) {
    this.job = job;
  }

  changeAbility(ability) {
    this.ability = ability;
  }

  get introduction() {
    if (this.body === undefined && this.hair === undefined) {
      this.changeBody(0);
      this.changeHair(0);
      return `
      내 직업은 '${JOB[this.job]}'이야. 
      특기는 '${ABILITY[this.ability]}'이지. 
      난 몸이 ${this.body} 한편이야. 
      그리고 머리스타일이 ${this.hair}하지.
    `;
    } else if (this.body === undefined) {
      this.changeBody(0);
      return `
      내 직업은 '${JOB[this.job]}'이야. 
      특기는 '${ABILITY[this.ability]}'이지. 
      난 몸이 ${this.body} 한편이야. 
      그리고 머리스타일이 ${this.hair}하지.
    `;
    } else if (this.hair === undefined) {
      this.changeHair(0);
      return `
      내 직업은 '${JOB[this.job]}'이야. 
      특기는 '${ABILITY[this.ability]}'이지. 
      난 몸이 ${this.body} 한편이야. 
      그리고 머리스타일이 ${this.hair}하지.
    `;
    } else {
      return `
        내 직업은 '${JOB[this.job]}'이야. 
        특기는 '${ABILITY[this.ability]}'이지. 
        난 몸이 ${this.body} 한편이야. 
        그리고 머리스타일이 ${this.hair}하지.
      `;
    }
  }

  showOff() {
    alert(`나는 최고의 ${this.job}이야!`);
  }

  showSkill() {
    alert(`간다! ${this.ability}!!`);
  }
}
