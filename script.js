let tg = window.Telegram.WebApp;
tg.expand();
let btn = document.getElementById("1");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.hide();

let items = new Object();

for(let i = 1; i < 5; i++){
	let btn = document.getElementById(i.toString());
	btn.addEventListener("click", () => {
		tg.MainButton.setText(+"Зказать " + +(Object.keys(items).length) + +" товаров");
		tg.MainButton.show();
		if(Object.keys(items).includes(i.toString())){
  			items[i.toString()] += 1;
		}else{
  			items[i.toString()] = 1;
		}
	});
}
console.log(items);
Telegram.WebApp.onEvent("mainButtonClicked", () => {
	tg.sendData(items);
});



