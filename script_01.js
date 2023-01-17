"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
test();
ausgabeName()

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
