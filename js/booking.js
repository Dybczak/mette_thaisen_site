/*querySelectorAll) er måden JavaScript “finder ting i HTML på”.*/
/*(section) => { gør noget }
section = én ting i listen
=> = “så gør dette”
{} = hvad du gør*/

/* =========================
   START
   ========================= */

window.onload = () => {
  goToStep(1);
}; /*Når siden åbner, så start på step 1*/
/*skal stå på 1 for den åbner*/

function goToStep(stepNumber) {
  /* = Jeg har oprettet en funktion der hedder "goToStep"
stepNumber er mine inputs (fx 1, 2, 3, 4, 5)
Det er den værdi man sender ind når man klikker på et af inputsne
*/
  /* = function goToStep(stepNumber) Formål:
At skifte mellem steps under booking (1 → 2 → 3 → 4 → 5)
Når man kalder fx goToStep(3) så betyder det: at man vil vise step 3 og at den gøres aktiv ude i siden.*/

  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  }); /* Finder alle elementer med class .section og fjerner aktive fra dem, så alle steps bliver skjult.*/

  const activeSection = document.getElementById("section" + stepNumber); /* = 
  /*Finder det specifikke element med id section + tallet i stepNumber (fx section2), så man kan vise det rigtige step bagefter.
  parrer section1 med step1, section2 med step2 osv.
  */

  if (activeSection) {
    activeSection.classList.add("active");
  } /* = Tjekker om activeSection findes, og hvis den gør, tilføjes class active, så det rigtige step bliver vist.
   */

  document
    .querySelectorAll(".step") /* = document.querySelectorAll(".step")= Finder alle cirkler fordi jeg har kaldt dem "step":*/
    .forEach((step) => {
      /*   .forEach((step) => { = Går dem igennem én for én .forEach*/
      step.classList.remove("active"); /* = Fjerner “aktive”*/
    });

  // aktiv step cirkel
  const activeStep = document.getElementById("step" + stepNumber); /* = Finder det step (cirkel) der matcher stepNumber, og tjekker om det findes før man bruger det (så koden ikke fejler hvis elementet mangler).
   */
  if (activeStep.classList.add("active")) {
  } /*uden .classList.add("active") sker der ingenting visuelt*/
}

/* =========================
   SUBMIT BOOKING
   ========================= */

function submitBooking(event) {
  /* = betyder at den tager fat i den class der hedder submitboooking*/
  event.preventDefault(); /* = stop browserens standard handling*/ /*// Stopper browseren i at reloade siden
// så booking-flowet fortsætter med JavaScript
event.preventDefault();*/
  goToStep(5); /* betyder den skal gå videre til step 5*/
}
