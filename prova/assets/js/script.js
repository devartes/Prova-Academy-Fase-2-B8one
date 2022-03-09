// grafico vendas
var xmlhttp = new XMLHttpRequest();
var url = "assets/js/JsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data)
    date = data.date_population.map(function (elem) {
      return elem.date;
    })
    population = data.date_population.map(function (elem) {
      return elem.population;
    })
    console.log(population)

    const ctx = document.getElementById('canvasvendas').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
        datasets: [{
          label: 'Estornado',
          data: population,
          backgroundColor: '#425DC7',
          borderColor: '#425DC7',
          borderWidth: 3
        },
        {
          label: 'Cancelado',
          data: population,
          backgroundColor: '#F03460',
          borderColor: '#F03460',
          borderWidth: 3
        },
        {
          label: 'Não Pago',
          data: population,
          backgroundColor: '#FFBE00',
          borderColor: '#FFBE00',
          borderWidth: 3
        },
        {
          label: 'Pago',
          data: population,
          backgroundColor: '#2EB042',
          borderColor: '#2EB042',
          borderWidth: 3
        }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              pointStyle: 'circle',
            }           
          }
        },
        elements: {
            line: {
            tension: 0
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}


//canvas responsivo
var canvas = document.getElementById('canvasvendas');
var heightRatio = 1.2;
canvas.height = canvas.width * heightRatio;

// grafico pedidos
var xmlhttp = new XMLHttpRequest();
var url = "assets/js/JsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data)
    date = data.date_population.map(function (elem) {
      return elem.date;
    })
    population = data.date_population.map(function (elem) {
      return elem.population;
    })
    console.log(population)

    const ctx = document.getElementById('canvaspedidos').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
        datasets: [{
          label: 'Total de pedidos',
          data: population,
          backgroundColor: '#425DC7',
          borderColor: '#425DC7',
          borderWidth: 3
        }
        
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              pointStyle: 'circle',
            }           
          }
        },
        elements: {
            line: {
            tension: 0
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}


//canvas responsivo
var canvas = document.getElementById('canvaspedidos');
var heightRatio = 1.2;
canvas.height = canvas.width * heightRatio;

// grafico revendedores
var xmlhttp = new XMLHttpRequest();
var url = "assets/js/JsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data)
    date = data.date_population.map(function (elem) {
      return elem.date;
    })
    population = data.date_population.map(function (elem) {
      return elem.population;
    })
    console.log(population)

    const ctx = document.getElementById('canvasrevendedores').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
        datasets: [{
          label: 'Valor total de vendas',
          data: population,
          backgroundColor: '#425DC7',
          borderColor: '#425DC7',
          borderWidth: 3
        },
        {
          label: 'Quantidade de pedidos',
          data: population,
          backgroundColor: '#2EB042',
          borderColor: '#2EB042',
          borderWidth: 3
        },
        {
          label: 'Comissão a pagar',
          data: population,
          backgroundColor: '#F03460',
          borderColor: '#F03460',
          borderWidth: 3
        }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              pointStyle: 'circle',
            }           
          }
        },
        elements: {
            line: {
            tension: 0
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}


//canvas responsivo
var canvas = document.getElementById('canvasrevendedores');
var heightRatio = 1.2;
canvas.height = canvas.width * heightRatio;