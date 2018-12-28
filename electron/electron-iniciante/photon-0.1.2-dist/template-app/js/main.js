function encode()
{
    convert('btoa');
}

function decode()
{
    convert('atob');
}

function convert(type)
{
    const { value } = document.getElementById('txt');
    
    if (!value) {
        alert('Please provide the txt input.');
    }
    
    let span = document.getElementsByClassName('output');

    if (span.value) {
        span[0].innerHTML = '';
    }
    else {
        span[0].innerHTML = (type == 'btoa') ? btoa(value) : atob(value);
    }
}