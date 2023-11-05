let tg = window.Telegram.WebApp;

tg.expand();
let btn = document.getElementById("1");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = new Object();

for(let i = 1; i < 5; i++){
	let btn = document.getElementById(i.toString());
	console.log(btn);
	btn.addEventListener("click", () => {
		if(tg.MainButton.isVisible){
			tg.MainButton.hide();
		}else{
			tg.MainButton.setText("Сделать Заказ!");
			tg.MainButton.show();
			if(items.hasOwnProperty(i.toString())){
  				items[i.toString()] = 1;
			}else{
  				items[i.toString()] += 1;
			}
		}
	});
}
Telegram.WebApp.onEvent("mainButtonClicked", () => {
	tg.sendData(items);
});



