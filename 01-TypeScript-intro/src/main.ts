// import { bulbasaur,pokemons } from "./bases/02-objects";
import { charmander } from "./bases/03-classes";
import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import { setupCounter } from "./counter";
// import { name, age } from "./bases/01-types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name} ${charmander.id}</h1>
  </div>
`;
