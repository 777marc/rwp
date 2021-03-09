console.log('main js');

function generatePlan() {

    // intensity: 0 = easy, 1 = medium, 2 = hard
    // long run day: 0 - 6 (mon - sun)
    let numberWeeks = 12;
    let intensity = 1;
    let numberDays = 4;
    let longRunDay = 6;

    let weeks = [];

    for (i = 1; i <= numberWeeks; i++) {
        let week = [];
        for (w = 1; w <= numberDays; w++) {
            let day = {
                week : i,
                day : w,
                miles : getDistance(i, numberWeeks, intensity)
            };
            week.push(day);
        }
        weeks.push(week); 
    }
    console.log(weeks)
<<<<<<< HEAD
}

function getDistance(week, numWeeks, planIntensity) {
    return 3;
}
=======
    tableCreate(weeks);
}

function tableCreate(weeks) {
    var body = document.getElementById('results-tbl');
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < weeks.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
        if (i == 2 && j == 1) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('hello'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
>>>>>>> 2fefa57a600990f782b4896e454c34f7b0504902
