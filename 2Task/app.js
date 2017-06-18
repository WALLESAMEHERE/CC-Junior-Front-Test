"use strict"
window.onload  = function(){
	const castSpell = document.getElementById("castSpell");
	castSpell.addEventListener('click',()=>{
		const yourSpell = document.getElementById("spell").value;
		var lowerSpell = yourSpell.toLowerCase();
		const startSpell = 'fe';
		const endSpell = 'ai';
		if(lowerSpell.search(startSpell) === -1 || lowerSpell.search(endSpell) === -1){
			console.log('dupa');
		}
		else{
			var stringSpell = lowerSpell.match(startSpell + '.*' );
			var spelos = stringSpell[0];;
			var lastSpell = spelos.lastIndexOf('ai')
			var rightSpell = spelos.substring(0,lastSpell + 2);
			if(rightSpell.startsWith('fe',0) && rightSpell.endsWith('ai', rightSpell.length)){
					var tabla = [
						['fe', 1],
						['ain', 2],
						['jee', 3],
						['dai', 5],
						['je', 2],
						['ne', 2],
						['ai', 2],
						];
						var result = 0;
						var stringToZmiany = rightSpell;
						var count = 0;
						var stringLength = stringToZmiany.length;
				for (var i = 0; i<tabla.length; i++) {
				   /* if (stringToZmiany.indexOf(tabla[i][0]) != -1) {
				    	stringToZmiany = stringToZmiany.replace(tabla[i][0] ,"")
				        	result += tabla[i][1];
				        	console.log(tabla[i][0],stringToZmiany,result)
				    } */
				    let count = 0;
				    var pos = stringToZmiany.indexOf(tabla[i][0]);
				    var scorejest = 0;
				   	while(pos > -1){
				   		++count;
				   		pos = stringToZmiany.indexOf(tabla[i][0], ++pos);
				   		stringLength -= tabla[i][0].length;
				   		for (var j = 0; j<tabla.length; j++) {
				   			if(tabla[i][0].length > 2 && tabla[i][0].includes(tabla[j][0]) && stringToZmiany.includes(tabla[j][0])){
				   				result -= 2;
				   			}
				   		}
				   	}
				   	result += count * tabla[i][1];
				   	//=console.log(tabla[i][0],count,result,stringLength)
				}	
				result -= stringLength;
				// console.log(stringToZmiany,result,stringLength);
				document.getElementById('doneDamage').innerHTML = result;	
			}
			else{
				console.log('KASZANA');
			}
		}
	});
}