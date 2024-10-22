document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-button').addEventListener('click', function() {
        const logo = document.getElementById('logo-blender');
        logo.classList.add('jiggle');
        setTimeout(() => {
            logo.classList.remove('jiggle');
        }, 1000); 
    });
});
