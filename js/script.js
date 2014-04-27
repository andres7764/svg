var debug = "";
window.onload = function()
{
	//alert("Hola");
	var color = "#0ff";
	var dibujar = SVG('mostrar').size("100%", 400);
	/*var image = dibujar.image('img/img.jpg');
    image.size("100%", "100%");
    image.hide(); */


	var letraA = [[30,40], [80,40], [130, 130], [110, 130], [75,100], [45, 100], 
				  [25, 130], [10, 130],[30,40]];

	var letraM = [[0, 0],[40,0],[70, 90],[100,0],[140,0],[140, 150], 
				  [120, 150], [110, 70], [100, 120], [70, 120], [60, 120], [30,70],[20, 150],[0,150],[0,0]];

	var letraV = [[0,0], [20,0], [50,100], [80,0], [100,0], [60,150], 
				  [40, 150], [0, 0]]; 
	var continua = dibujar.polyline(letraA).fill("none").stroke({width : 4, color: '#f06'}).attr({ fill: color });
	continua.animate(1000).plot(letraM).loop();

	for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			//console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							//image.maskWith(continua);
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;
			}
		});
	}

	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}