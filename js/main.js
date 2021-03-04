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
                miles : 3
            };
            week.push(day);
        }
        weeks.push(week); 
    }
    console.log(weeks)
}