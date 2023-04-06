const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = ""
let pass2 = ""
let pass_1_el = document.getElementById("pass1-el")

let pass_2_el = document.getElementById("pass2-el")

console.log(pass_1_el)
console.log(pass_2_el)


function getpass() {
    pass_1_el.textContent = random_gen()
    pass_2_el.textContent = random_gen()
    
}
function random_gen() {
    let random_pass = ""
    let random_str = ""
    for (let i = 0; i < 11; i++) {
        let index = Math.floor(Math.random()*characters.length)
        let random_str = characters[index]
        random_pass += random_str
    }
    return random_pass
}

/* Shivam Finally you did it, it took around 2-3 hrs, Good see go step by step without hurry think, try, repeat & Do untill it happen

*/

// function copy() {
//     // Get the text field
//     var copyText = document.getElementById("myInput");
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
  
//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
    
//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
// }

// Shivam create more