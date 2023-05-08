

let usuario = new Array();
let status_book = new Array();

let objetoDatos = {
    labels: "1",
    data: "1",
  };



function fetchData() {
  // Obtener datos de la API
  fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((response) => response.json())
    .then((data) => {
      // creamos un array de etiquetas
      let etiquetas = data.map(function (valor, indice) {
        return "Elemento " + indice;
      });
      // creamos un array de datos
      let datos = data;

      // creamos el objeto compatible con Chart.js
      objetoDatos.labels = etiquetas;
      objetoDatos.data = datos;
      

      // aquí ya podemos utilizar objetoDatos en Chart.js
     // console.log(objetoDatos);
      //console.log(objetoDatos.data);
      // Obtener los datos necesarios para el gráfico
      /*let indice=0;

            data.forEach(usuarios => {
                
              usuario[indice] = usuarios.title;
              status_book[indice] = usuarios.completed;
              indice = indice + 1;
            });
            
            



            state.labels = Object.keys(data)
            state.dataValues = Object.values(data)
            console.log(state.labels)
            console.log(state.dataValues)*/
    })
    .catch((error) => {
      console.error("Error al obtener datos de la API:", error);
    });
}

function generateChart(labels, dataValues) {
    console.log('aqui entro')
  console.log(dataValues);
  console.log(labels);

  // Crear el gráfico
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Datos de ejemplo",
          data: dataValues,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

const init = async () => {
  await fetchData();
  console.log(objetoDatos.data)
  console.log(objetoDatos.labels)

  await generateChart(objetoDatos.labels, objetoDatos.data);
};

init();




