const biciclette = [
  {
    nome: "Bici1",
    peso: 7.2,
  },
  {
    nome: "Bici2",
    peso: 6.9,
  },
  {
    nome: "Bici3",
    peso: 7.7,
  },
  {
    nome: "Bici4",
    peso: 8.3,
  },
  {
    nome: "Bici5",
    peso: 6.7,
  },
];

const { nome, peso } = biciclette[0];
let biciLeggera = {
  nome,
  peso,
  indice: 0,
};

for (let i = 1; i < biciclette.length; i++) {
  const { peso, nome } = biciclette[i];

  if (biciLeggera.peso > peso) {
    biciLeggera = {
      nome,
      peso,
      indice: i,
    };
  }
}

let container = document.getElementById("box");
const biciDaMostrare = `<div>
                            <h1>${biciLeggera.nome}</h1>
                            <h2>${biciLeggera.peso} Kg</h2>
                        </div>`;

container.innerHTML = biciDaMostrare;
