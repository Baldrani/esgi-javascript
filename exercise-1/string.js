function ucfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log(ucfirst("coucou toi"));

function capitalize(string, joinchar=' '){
    mots = string.split(' ');
    mots = mots.map(mot => ucfirst(mot));
    return mots.join(joinchar);
}
console.log(capitalize("coucou toi"));

function camelCase(string){
    string = capitalize(string, '');
    return string.charAt(0).toLowerCase() + string.slice(1);
}
console.log(camelCase("coucou toi"));

function snake_case(string){
    return capitalize(string, '_').toLowerCase()
}
console.log(snake_case("coucou toi"));

testObject = {prairie:
        {animal: {
                type: "mamal",
                name: "goat"}
        }
};
function prop_access(obj, path) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
    }, obj || self)
}
console.log(prop_access(testObject, "prairie.animal"))
/* Test with reccursion
function prop_access(object, string) {
    let lookingFor = string.split('.');
    var i=0;
    (function test(object, lookingFor) {
        i++;
        //const test = lookingFor.shift();
        console.log(lookingFor)
        //if (test === undefined || object.test === undefined) return object;
        test(object.test, lookingFor);
    })().bind();
}
console.log(prop_access(testObject, "prairie.animal.type"))
*/

function leet(string){
    chars = string.split('');
    result = "";
    alphabet = [{O: '0'}, {D: '0'}, {I: '1'}, {L: '1'}, {Z: '2'}, {E: '3'}, {A: '4'}, {S: '5'}, {G: 'g'}, {T: '7'}];
    chars.forEach((c,i) => {
        alphabet.forEach((letter) => {
            for (const [key, value] of Object.entries(letter)) {
                if(c.toUpperCase() == key.toString()){
                    chars[i] = value;
                    return
                }
            }
        });
    });
    return chars.join('')
}
console.log(leet ('test de sa maman, xylophone'));

function verlan(string){
    mots = string.split(' ');
    res = "";
    mots.forEach((mot) => {
        reversedmot = mot.split('').reverse().join('');
        res += reversedmot + " "
    });
    return res
}
console.log(verlan("coucou toi"));


function yoda(string){
    return string.split(' ').sort( () => { return Math.random() > 0.5 ? -1 : 1 } ).join(' ')
}
console.log(yoda("ceci est un test de map"))

function vig(string){

}