function calcTiep(event) {
    event.preventDefault();
        let bill = document.getElementById('bill').value;
        let serviceQual = document.getElementById('serviceQual').value;
        let numOfPeople = document.getElementById('people').value;
            if (bill == 0 | serviceQual == 0){
                alert("Preencha o campo");
                return;
            }

            if (numOfPeople == "" | numOfPeople <= 1){
                numOfPeople = 1;
                document.getElementById('each').style.display = "none"

            }else{
                document.getElementById('each').style.display = "block"

            }

        let total = (bill * serviceQual) / numOfPeople;
        total  = total.toFixed(2);
        document.getElementById('tip').innerHTML = total;
        document.getElementById('totalTiep').style.display = "block";



}

document.getElementById('totalTiep').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calcTiep);