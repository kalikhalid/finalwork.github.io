let tg = window.Telegram.WebApp;
tg.expand();
let btn = document.getElementById("1");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.hide();

let items = new String();

for(let i = 1; i < 5; i++){
	let btn = document.getElementById(i.toString());
	btn.addEventListener("click", () => {
		items += " " + i.toString();
		tg.MainButton.setText("Зказать " + (items.length / 2));
		tg.MainButton.show();
	});
}
console.log(items);
Telegram.WebApp.onEvent("mainButtonClicked", () => {
	tg.sendData(items);
});



