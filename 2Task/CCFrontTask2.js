"use strict"
window.onload = function() {
    // get button cast a spell
    const castSpell = document.getElementById("castSpell");
    // start function check spell and dmgS
    castSpell.addEventListener('click', () => {
        // get value from input
        const yourSpell = document.getElementById("spell").value;
        // Change the letters to lower 
        var lowerSpell = yourSpell.toLowerCase();
        const startSpell = 'fe'; // first subspell
        const endSpell = 'ai'; // last subspell
        var damage = 0; // total dmg
        // array with accepted spells
        var arrayWithSubspells = [
            ['fe', 1],
            ['ain', 2],
            ['jee', 3],
            ['dai', 5],
            ['je', 2],
            ['ne', 2],
            ['ai', 2],
        ];
        // A condition that checks if there is not one of start or end spell in the value 
        if (lowerSpell.search(startSpell) === -1 || lowerSpell.search(endSpell) === -1) {
            document.getElementById('doneDamage').innerHTML = damage;
        } else {
            // get just value from accepted start spell
            var spellFromStart = lowerSpell.match(startSpell + '.*');
            var lastSpell = spellFromStart[0].lastIndexOf(endSpell);
            // Get only the magic spell of the whole value
            var stringSpell = spellFromStart[0].substring(0, lastSpell + 2);
            // start fuction which check subspells,return total dmg and show damage on page
            document.getElementById('doneDamage').innerHTML = exports.damage(stringSpell, damage, arrayWithSubspells);
            console.log(damage);
        }
    });
    var exports = {
        damage: (spell, damage, arrayWithSubspells) => {
            if (spell.startsWith('fe', 0) && spell.endsWith('ai', spell.length)) {
                var stringWithoutSpells = spell.length;
                var doubleFe = 0;
                // loop which cheking how many subspells include value
                for (var i = 0; i < arrayWithSubspells.length; i++) {
                    let count = 0;
                    var pos = spell.indexOf(arrayWithSubspells[i][0]);
                    while (pos > -1) {
                        ++count;
                        pos = spell.indexOf(arrayWithSubspells[i][0], ++pos);
                        // Subtracts the length of each subspell in value, at the end returns the number of non-spell characters
                        stringWithoutSpells -= arrayWithSubspells[i][0].length;
                        console.log(count, arrayWithSubspells[i][0]);
                        // condition checking how many 'fe' include magic spell
                        if (arrayWithSubspells[i][0] === 'fe') {
                            ++doubleFe;
                        }
                        // loop which checking if subspell with length > 3  include other subspell - 
                        for (var j = 0; j < arrayWithSubspells.length; j++) {
                            if (arrayWithSubspells[i][0].length > 2 && arrayWithSubspells[i][0].includes(arrayWithSubspells[j][0]) && spell.includes(arrayWithSubspells[j][0])) {
                                // if condition = true, subtracts from dmg -2 because all subspells which may be in the longer string may dmg  = 2
                                damage -= 2;
                            }
                        }
                    }
                    // return total dmg from one subspell (Multiplies by the quantity of given subspell in magic spell)
                    damage += count * arrayWithSubspells[i][1];
                }
                // total dmg minus all non-spell characters / each letter = -1;
                damage -= stringWithoutSpells;
                // if value include more than 1 'fe' - dmg = 0;
                if (doubleFe > 1) {
                    damage = 0;
                }
            }
            return damage;
        }
    }
}