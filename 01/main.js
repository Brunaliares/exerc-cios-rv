function isAllowed(age, sex, balance) {
    try {
    const convertedAge = Number(age);
    const convertedBalance = Number (balance);
    const convertedSex = String (sex).toLocaleLowerCase();
    if (convertedSex !== "f" && convertedSex !=="m") return false; 
    if (convertedAge <18) return false;
    if (convertedSex=== "m"&& convertedBalance <50) return false;
    return true;age
    } catch (woof) {

        console.error(woof);
        return false;
    }
    }

    function acessClickHandler () {
    const age = document.getElementById("age"). value;
    const sex = document.getElementById("sex"). value;
    const balance = document.getElementById("balance"). value;
    const canEnter=isAllowed(age, sex, balance);
    alert(canEnter) 

    }



