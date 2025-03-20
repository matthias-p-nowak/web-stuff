console.log('navigate.js loaded');

function closeDetails(event){
    console.log('closeDetails(event)');
    let det=event.target.closest('details');
    det.removeAttribute('open');
}