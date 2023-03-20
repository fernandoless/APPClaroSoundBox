import { writable, get } from "svelte/store";
import { browser } from "$app/environment";

// Nome do Aluno
export const nomeAluno = writable(
  (browser && localStorage.getItem("nomeAluno"))
);
nomeAluno.subscribe((val) => browser && (localStorage.nomeAluno = val));

// Nome do Aluno
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0),
		voltar: () => set(Number(countFinal))
	};
}

export const count0 = createCount();

export const count = writable((browser && localStorage.getItem("count0")));
count0.subscribe((val) => browser && (localStorage.count0 = val));

export const countFinal = get(count);




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