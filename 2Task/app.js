"use strict"
window.onload = function() {
    const castSpell = document.getElementById("castSpell");
    castSpell.addEventListener('click', () => {
        const yourSpell = document.getElementById("spell").value;
        var lowerSpell = yourSpell.toLowerCase();
        const startSpell = 'fe';
        const endSpell = 'ai';
        var result = 0;
        if (lowerSpell.search(startSpell) === -1 || lowerSpell.search(endSpell) === -1) {
            document.getElementById('doneDamage').innerHTML = result;
        } else {
            var stringSpell = lowerSpell.match(startSpell + '.*');
            var spelos = stringSpell[0];;
            var lastSpell = spelos.lastIndexOf('ai')
            var rightSpell = spelos.substring(0, lastSpell + 2);
            checkSpell(rightSpell);
            function checkSpell(spell){
            if (spell.startsWith('fe', 0) && spell.endsWith('ai', spell.length)) {
                var tabla = [
                    ['fe', 1],
                    ['ain', 2],
                    ['jee', 3],
                    ['dai', 5],
                    ['je', 2],
                    ['ne', 2],
                    ['ai', 2],
                ];
                
                var stringToZmiany = spell;
                var count = 0;
                var stringLength = stringToZmiany.length;
                var doubleFe = 0;
                for (var i = 0; i < tabla.length; i++) {
                    let count = 0;
                    var pos = stringToZmiany.indexOf(tabla[i][0]);
                    var scorejest = 0;
                    while (pos > -1) {
                        ++count;
                        pos = stringToZmiany.indexOf(tabla[i][0], ++pos);
                        stringLength -= tabla[i][0].length;
                        console.log(count, tabla[i][0]);
                        if (tabla[i][0] === 'fe') {
                            ++doubleFe;
                        }
                        for (var j = 0; j < tabla.length; j++) {
                            if (tabla[i][0].length > 2 && tabla[i][0].includes(tabla[j][0]) && stringToZmiany.includes(tabla[j][0])) {
                                result -= 2;
                            }
                        }
                    }
                    result += count * tabla[i][1];
                }
                result -= stringLength;
                if (doubleFe > 1) {
                    result = 0;
                }
                document.getElementById('doneDamage').innerHTML = result;
            } else {
                document.getElementById('doneDamage').innerHTML = result;
            }
            }
        }
    });
}