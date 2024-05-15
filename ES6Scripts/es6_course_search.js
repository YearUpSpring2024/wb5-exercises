"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    },
];



console.log("--------------------------when does PROG200 start?---------------------------");

// When does the PROG200 course start ?
let searchId = "PROG200";


let matching = null;
matching = courses.find((m) => m.CourseId == searchId);

if (matching != null) {
    console.log(matching.CourseId + " start date is " + matching.StartDate)
} else {
    console.log("Class is not found")
}

console.log("---------------------Title of PROJ500----------------------");
let searchTitle = "PROJ500";
let matchingTitle = null
// What is the title of the PROJ500 course?

matchingTitle = courses.find((m) => m.CourseId == searchTitle);
if (matchingTitle != null) {
    console.log(matchingTitle.CourseId + " course title is " + matchingTitle.Title);
} else {
    console.log("Title is not found")
}

// let price = 50.00;

console.log("-------------------Titles that match 50 or less-----------");
// What are the titles of the courses that cost $50 or less?
let matchingPrice = courses.filter(p => parseFloat(p.Fee) <= 50.00);

if (matchingPrice.length > 0) {
    for (let course of matchingPrice) {
        console.log(course.Title)
    }
} else {
    console.log("No course has been found");
}

console.log("---------------------Classroom that met in Classroom 1----------------------------");

let courseLocation = "Classroom 1";
// What classes meet in "Classroom 1"?

let matchingLocation = courses.filter(course => course.Location == courseLocation);
if (matchingLocation.length > 0) {
    console.log("course that met in Clssaroom 1: ")
    for (let i = 0; i < matchingLocation.length; i++) {
        console.log(matchingLocation[i].Title)
    }
} else {
    console.log("No course met in classroom 1")
}