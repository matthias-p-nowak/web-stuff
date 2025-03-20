console.log('pagecontrol.js loaded');

function resizeTextarea(){
    document.querySelectorAll('textarea').forEach(function(textarea){
        textarea.oninput = function(){
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }
    });
}

resizeTextarea();