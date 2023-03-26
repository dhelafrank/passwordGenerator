let output = document.getElementById('output')
let copyTextBtn = document.getElementById("copyText")


function generate() {
    let length = document.getElementById("charInput").value;
    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;
    let copyTextBtn = document.getElementById("copyText")
    let password = "";
    let chars = "";
    copyTextBtn.style.visibility="hidden";
    // copyTextBtn.innerHTML="copy"
    // copyTextBtn.style="color:#fff; border-color:#fff"
    if (lowercase) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
        chars += "0123456789";
    }
    if (symbols) {
        chars += "!@#$%^&*()_-+={}[]\;:'\<>,.?/";
    }
    else if(chars<2){
        alert("toggle the switches")
    }
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    output.value = password;
    if (output.value.length>2){
        copyTextBtn.style="visibility:unset";
    }
}

    const copyContent = async () =>{
        try{
            await navigator.clipboard.writeText(output.value)
            copyTextBtn.style="visibility:unset; color:#08962c; border-color:#08962c"
            copyTextBtn.innerHTML="copied!"
            output.style="transform:scale(1.1)"
            setTimeout(()=>{
                output.style="transform:scale(1)"
                copyTextBtn.innerHTML="copy"
                copyTextBtn.style="color:#fff; border-color:#fff; visibility:unset;"
            },500
            )
        } catch(err){
            alert(err)
        }
    }