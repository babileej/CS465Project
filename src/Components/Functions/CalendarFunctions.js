// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

export function changeView(typeOfView) {
    let today = new Date().getDate();
    let dayOfWeek = new Date().getDay();
    let month = new Date().getMonth();
    
    if(typeOfView === "Weekly") {
        return renderWeekly(today, dayOfWeek);
    }
    else if(typeOfView === "Monthly") {
        return renderMonthly(today,dayOfWeek,month);
    }
    else {
        return renderDaily(today, dayOfWeek);
    }
}

// Return current week to render
export function renderWeekly(today, dayOfWeek) {
    let toRender = [];
    let daysOfWeek = ['Sun','Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let i = today - dayOfWeek;
    for(i; i < (today - dayOfWeek) + 7; ++i) {
        let day = {
            dateOfWeek: daysOfWeek[i - (today-dayOfWeek)],
            date: i,
            display: false
        };
        if(day.date >= today) {
            day.display = true;
        }
        toRender.push(day);
    }
    return toRender;
}

// Return current day to render
export function renderDaily(today, dayOfWeek) {
    let toRender = [];
    let daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    toRender.push({
        dateOfWeek: daysOfWeek[dayOfWeek],
        date: today,
        display: true
    });
    return toRender;
}

// Return current month to render
export function renderMonthly(today, dayOfWeek, month) {
    let toRender = [];
    let daysOfWeek = ['Su','M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    let daysInMonth = 0;
    let previousMonth = 0;
    switch(month){
        case (0, 2, 4, 6, 7, 9, 11):
            if(month === 2)
                previousMonth = 28;
            else if(month === 0 || month === 7)
                previousMonth = 31;
            else
                previousMonth = 30;
            daysInMonth = 31;
            break;
        case (1):
            daysInMonth = 28;
            previousMonth = 31;
            break;
        case (3, 5, 8, 10):
            previousMonth = 31;
            daysInMonth = 30;
            break;
        default:
            break;
    }
    let i = ((1 - (today - dayOfWeek)) % 7);
    for(i; i < daysInMonth + 1; ++i) {
        let day = {};
        let whatDay;
        if (i <= 0) {
            day = {
                dateOfWeek: daysOfWeek[(previousMonth + i) % 7],
                date: previousMonth + i,
                display: false
            };    
        }
        else {
            whatDay = ((i - (today - dayOfWeek)) % 7);
            if (whatDay < 0)
                whatDay = 7 + whatDay;
            day = {
                dateOfWeek: daysOfWeek[whatDay],
                date: i,
                display: false
            };
            if(day.date >= today) {
                day.display = true;
            }
        }
        toRender.push(day);
    }
    //console.log(toRender)
    return toRender;
}
