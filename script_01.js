"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();
// ausgabeName();
// ausgabeNameParam("Minus");
// ausgabeNameParams("Marinus", "Plus");
// ausgabeNameParams(prompt("Vorname eingeben:"), prompt("Nachname eingeben:"));

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

/***** Funktionen 03a *****/

// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle


// Funktionsaufruf
//ausgabeNameParams2("Minus", "Plus");

function ausgabeNameParams2(firstname, familyname)
{
    // 1. Funktionalität: string composing
    const GAP = " ";
    let str = "Hallo" + GAP + firstname + GAP + familyname;

    // 2. Funktionalität: string output
    console.log(str);
    
}

// Trennen der Funktionalitäten | return

// Funktionsaufruf
output(getString("Minus", "Plus"));

// 1. Funktionalität: string composing
function getString(firstname, familyname)
{
    const GAP = " ";
    let str = "Hallo" + GAP + firstname + GAP + familyname;
    return str;
}

// 2. Funktionalität: string output
function output(outputData)
{
    console.log(outputData);
}