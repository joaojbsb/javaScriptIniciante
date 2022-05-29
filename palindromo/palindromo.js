//solução 01

function verifarPalindromo(string) {
    if(!string) return;
    return string.split("").reverse().join("") === string;
}

console.log(verifarPalindromo2('ovo'));


//solução 02
function verifarPalindromo2(string){
    if (!string) return 'string inexistente';

    for (let i = 0; i < string.length /2; i++) {
        if (string[i] !== string[string.length -1 -i]) {
            return false;
        }
    }

    return true;
}