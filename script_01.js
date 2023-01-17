"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
test();
ausgabeName();
ausgabeNameParam("Minus");
ausgabeNameParams("Marinus", "Plus");

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
console.log("Habedere");
}

// 2a Parametrisierung + Datenübergabe von INNEN

function ausgabeName()
{
    let user = "Marinus";
    console.log ("Hallo " + user);
}

// 2b Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNameParam(user)
{
    console.log ("Hallo " + user);
}

// 2c Mehrere Parameter

function ausgabeNameParams(firstname, familyname)
{
    console.log ("Hallo " + firstname + " " + familyname);
}