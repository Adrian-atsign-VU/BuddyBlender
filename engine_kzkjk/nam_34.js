document.getElementById('copyButton').addEventListener('click', function() {
    const names = "Adrian, Nate, Huon, Anthony, Vinh, Aman, Chris, Scott, Desire, Jodie, Khuzaima, Malachy, Sanjay, Tony, Yazan, Zainab";
    navigator.clipboard.writeText(names).then(() => {
        alert('Names copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});