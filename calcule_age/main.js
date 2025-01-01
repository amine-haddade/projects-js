let affiche_date=document.getElementById('date_lire');
let date_complet=document.getElementById('date_naiss');
let button=document.getElementById('button');


let year=document.getElementById('year')
let montch=document.getElementById('month');
let day=document.getElementById('day');
let hour=document.getElementById("hour");
let second=document.getElementById("second");
let mili_sconde=document.getElementById("mili_sconde");


let mainElement = document.querySelector("main")


date_complet.addEventListener('change', function() {
    var selctDate=new Date(this.value);

    var schow_date=selctDate.toLocaleDateString('en-US');
    affiche_date.innerHTML=schow_date

    // age en mili sconde
    
    var nbr_miliscond=Date.parse(schow_date);// retourner le nombre de milisecondes de cette date 
    var date_now=Date.now();// retourn le nombre de milisconde depuis 1 jan 1970
    
    var age_miliscond=date_now-nbr_miliscond
    // pour cacluler age en mili scond prend le nombre de mil scond de date actuel - nombre de mil sconde de date nissance
    mili_sconde.innerHTML=age_miliscond


    // 

    var nbr_second =1000
    var nbr_minute=nbr_second*60;
    var nbr_hour=nbr_minute*60;
    var nbr_daye=nbr_hour*24;
    var nbr_montch=nbr_daye*30;
    var nbr_year=nbr_daye*365

    // rounded les age 
    var nbr_year=Math.round(age_miliscond/nbr_year);
    year.innerHTML=nbr_year
    var nbr_montch=nbr_year*12
    montch.innerHTML=nbr_montch;

    var nbr_daye=nbr_year*365
    day.innerHTML=nbr_daye

    var nbr_hour=Math.round(age_miliscond/nbr_hour) 
    hour.innerHTML=nbr_hour 

    var nbr_second=Math.round(age_miliscond/nbr_second)
    second.innerHTML=nbr_second

    mainElement.classList.remove("hide")

    
})
