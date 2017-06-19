"use strict"
window.onload = function() {
    const castSpell = document.getElementById("castSpell");
    castSpell.addEventListener('click', () => {
        const yourSpell = document.getElementById("spell").value;
        var lowerSpell = yourSpell.toLowerCase();
        const startSpell = 'fe';
        const endSpell = 'ai';
        var damage = 0;
        var arrayWithSubspells = [
            ['fe', 1],
            ['ain', 2],
            ['jee', 3],
            ['dai', 5],
            ['je', 2],
            ['ne', 2],
            ['ai', 2],
        ];
        if (lowerSpell.search(startSpell) === -1 || lowerSpell.search(endSpell) === -1) {
            document.getElementById('doneDamage').innerHTML = damage;
        } else {
            var spellFromStart = lowerSpell.match(startSpell + '.*');
            var lastSpell = spellFromStart[0].lastIndexOf(endSpell);
            var stringSpell = spellFromStart[0].substring(0, lastSpell + 2);
            exports.damage(stringSpell, damage, arrayWithSubspells);
        }
    });
    var exports = {
        damage: (spell, damage, arrayWithSubspells) => {
            if (spell.startsWith('fe', 0) && spell.endsWith('ai', spell.length)) {
                var stringForNoSpells = spell;
                var stringLength = stringForNoSpells.length;
                var doubleFe = 0;
                for (var i = 0; i < arrayWithSubspells.length; i++) {
                    let count = 0;
                    var pos = stringForNoSpells.indexOf(arrayWithSubspells[i][0]);
                    while (pos > -1) {
                        ++count;
                        pos = stringForNoSpells.indexOf(arrayWithSubspells[i][0], ++pos);
                        stringLength -= arrayWithSubspells[i][0].length;
                        console.log(count, arrayWithSubspells[i][0]);
                        if (arrayWithSubspells[i][0] === 'fe') {
                            ++doubleFe;
                        }
                        for (var j = 0; j < arrayWithSubspells.length; j++) {
                            if (arrayWithSubspells[i][0].length > 2 && arrayWithSubspells[i][0].includes(arrayWithSubspells[j][0]) && stringForNoSpells.includes(arrayWithSubspells[j][0])) {
                                damage -= 2;
                            }
                        }
                    }
                    damage += count * arrayWithSubspells[i][1];
                }
                damage -= stringLength;
                if (doubleFe > 1) {
                    damage = 0;
                }
                document.getElementById('doneDamage').innerHTML = damage;

            } else {
                document.getElementById('doneDamage').innerHTML = damage;
            }
            return damage;
        }
    }
}