function calculateAge() {
    // Get input values and convert them to integers
    const day = parseInt(document.getElementById("day").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const year = parseInt(document.getElementById("year").value, 10);
  
    // Check if input is valid
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > new Date().getFullYear()) {
      document.getElementById("result").innerText = "Vennligst fyll inn gyldige verdier for dag, måned og år.";
      return;
    }
  
    const today = new Date();
    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() + 1 - month;
    let ageDays = today.getDate() - day;
  
    // Adjust for negative days and months
    if (ageDays < 0) {
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
      ageMonths--;
    }
    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }
  
    // Display result
    document.getElementById("result").innerText = 
      `din alder er: ${ageYears} år ${ageMonths} måneder og ${ageDays} dager`;
  }  