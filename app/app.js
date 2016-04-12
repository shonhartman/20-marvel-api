import 'es6-promise';
import 'whatwg-fetch';

import Character from "./modules/Character";
import Event from "./modules/Event";



function character(ctx) {
  let placeholderLeft = document.querySelector("#placeholderLeft");
  placeholderLeft.innerHTML = "";
  let placeholderRight = document.querySelector("#placeholderRight");
  placeholderRight.innerHTML = "";

  let character = new Character(ctx.params.name);

  // console.log(ctx);

}

function event(ctx) {
  let placeholderLeft = document.querySelector("#placeholderLeft");
  placeholderLeft.innerHTML = "";
  let placeholderRight = document.querySelector("#placeholderRight");
  placeholderRight.innerHTML = "";

  let event = new Event(ctx.params.id);

  // console.log(ctx);

}

page("/", character);
page("/characters/:name", character);
page("/events/:id", event);


page();
