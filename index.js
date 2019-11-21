// var user = {
//     email: '',
//     projectNum: '',
//     orgName: ''
// }

var ROI = {
    email: '',
    projectNum: '',
    orgName: '',
    time: 0,
    dollars: 0,
    cdr: 0,
    clients: 0
}

//Collecting User Info
function userInfo(){
    ROI.email = $('#email').val();
    ROI.projectNum = $('#projectNum').val();
    ROI.orgName = $('#orgName').val();
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}

//Collecting Time
function time(){
    var hours = [$('#timeQ1').val(), $('#timeQ2').val(), $('#timeQ3').val(), $('#timeQ4').val()];
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.time = hours.reduce((a,b) => parseInt(a)+parseInt(b),0);
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
    
}
//Collecting Money
function money(){
    var dollars = [$('#moneyQ1').val(), $('#moneyQ2').val(), $('#moneyQ3').val()];
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.dollars = dollars.reduce((a,b) => parseInt(a)+parseInt(b),0); 
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
    
}

// CDR
function costDollarRaised(){
    var cdr =( $('#CDRexpenses').val()/$('#CDRrevenue').val());
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.cdr = cdr;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}

//Clients Served
function clientsServed(){
    //estimated service cost formula
    var estServiceCost = ($('#clientsQ1').val()/$('#clientsQ2').val());
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.clients = estServiceCost;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}


// update ROI
function update(ROI){
    return JSON.parse(ROI);
}


//Displaying Results
function display(){
    ROI = JSON.parse(sessionStorage.getItem('inputs'))
    $('#dollarsSaved').html('$' + this.ROI.dollars);
   
    $('#hoursSaved').html(this.ROI.time);

    $('#costPerDollarRaised').html(this.ROI.cdr);

    $('#clientsServed').html(this.ROI.clients);
}