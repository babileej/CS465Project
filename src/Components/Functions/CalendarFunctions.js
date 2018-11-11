// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';

export function changeView(typeOfView) {
    let today = new Date().getDate();
    let dayOfWeek = new Date().getDay();
    
    if(typeOfView === "Weekly") {
        return renderWeekly(today, dayOfWeek);
    }
    else if(typeOfView === "Monthly") {
        return renderMonthly(today,dayOfWeek);
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
    let daysOfWeek = ['Sun','Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    toRender.push({
        dateOfWeek: daysOfWeek[dayOfWeek],
        date: today,
        display: true
    });
    return toRender;
}

// Return current month to render
export function renderMonthly(today, dayOfWeek) {
    return;
}
