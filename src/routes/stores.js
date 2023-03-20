import { writable, get } from "svelte/store";
import { browser } from "$app/environment";

// Nome do Aluno
export const nomeAluno = writable(
  (browser && localStorage.getItem("nomeAluno"))
);
export const pagSalva = writable(
	(browser && localStorage.getItem("pagina"))
);

// Nome do Aluno
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0),
		intro: () => set(1),
		voltar: () => set(Number(salvarPagina))
	};
}

export const pagina = createCount();
export const salvarPagina = get(pagSalva);

nomeAluno.subscribe((val) => browser && (localStorage.nomeAluno = val));
pagina.subscribe((val) => browser && (localStorage.pagina = val));





// // array
// const storedFruits = JSON.parse(browser && localStorage.getItem("fruits")) || [
//   "apple",
//   "orange",
//   "grapes",
// ];
// export const fruits = writable(browser && storedFruits);
// fruits.subscribe(
//   (val) => browser && (localStorage.fruits = JSON.stringify(val))
// );


// // object
// const storedUser = JSON.parse(browser && localStorage.getItem("user")) || {
//   name: "webjeda",
//   id: "123",
// };
// export const user = writable(browser && storedUser);
// user.subscribe(
//   (val) => browser && (localStorage.user = JSON.stringify(val))
// );