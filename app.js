function ageCal() {
  let birthdate = document.getElementById("birthdate").value;

  if (!birthdate) {
    document.getElementById("result").innerText= "Please select your birthdate!";
    document.getElementById("result").style.visibility = "visible";
    return;
  }

  let today = new Date();
  let birth = new Date(birthdate);
  if (birth > today) {
    document.getElementById("result").innerText = "Birth date cannot be in the future!";
    document.getElementById("result").style.visibility = "visible";
    return;
  }

  let age = today.getFullYear() - birth.getFullYear();
  let monthDiff = today.getMonth() - birth.getMonth();
  let dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
if (age >= 18) {
  document.getElementById("result").innerHTML = `Hey your in the age: ${age} <br> Hey you are Adult `;
  document.getElementById("result").style.visibility = "visible";
} else {
  document.getElementById("result").innerHTML = `Hey your in the age: ${age} <br> Hey you are Minor `;
  document.getElementById("result").style.visibility = "visible";
}

}
