const fetch = require('node-fetch');
const Chart = require('chart.js');

// Obtener datos de la API
fetch('https://ejemplo.com/api/datos')
    .then(response => response.json())
    .then(data => {
        // Obtener los datos necesarios para el gráfico
        const labels = data.labels;
        const valores = data.valores;

        // Crear el gráfico
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Datos de ejemplo',
                    data: valores,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });
