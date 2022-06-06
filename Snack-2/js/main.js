const squadre = [
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Fiorentina",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

for (let i = 0; i < squadre.length; i++) {
  const puntiFatti = generateNumbers(10, 50);
  const falliSubiti = generateNumbers(0, 10);

  squadre[i].puntiFatti = puntiFatti;
  squadre[i].falliSubiti = falliSubiti;
}

console.table(squadre);

const datiDaMostrare = [];

for (let i = 0; i < squadre.length; i++) {
  const { nome, falliSubiti } = squadre[i];
  datiDaMostrare.push(nome, falliSubiti);
}

console.log(datiDaMostrare)
