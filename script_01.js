"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
test();
ausgabeName();
ausgabeNameParam("Minus");

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

// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNameParam(user)
{
    console.log ("Hallo " + user);
}