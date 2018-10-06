
document.addEventListener("keydown", movercerdo);
var vp= document.getElementById('villa');
var papel= vp.getContext("2d");
var mapa= "tile.png";
var xcerdo=150;
var ycerdo=100;

var xVaca = new Array();
var yVaca = new Array();

function movercerdo(e){
movimiento= 10;
teclas=
{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
  switch(e.keyCode)
	{
		case teclas.LEFT:
			xcerdo = xcerdo - movimiento;
			dibujar(xcerdo, ycerdo);
		break;
		case teclas.UP:
			ycerdo = ycerdo - movimiento;
			dibujar(xcerdo, ycerdo);
		break;
		case teclas.RIGHT:
			xcerdo = xcerdo + movimiento;
			dibujar(xcerdo, ycerdo);
		break;
		case teclas.DOWN:
			ycerdo = ycerdo + movimiento;
			dibujar(xcerdo, ycerdo);
		break;
	}
}






var fondo =
{
url:"tile.png",
cargaOK:false
};

var vaca= {
  url: "vaca.png",
  cargaOK:false
};
var cerdo={
  url:"cerdo.png",
  cargaOK:false
};



fondo.imagen = new Image();
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);


var pollo=new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",dibujarPollos);


function cargarFondo()
{
 fondo.cargaOK= true;
 dibujar();

}

function cargarVacas()
{
 vaca.cargaOK= true;
 mantenerPosicion();

}
function cargarCerdos()
{
 cerdo.cargaOK= true;
dibujar();

}


function mantenerPosicion()
{
	if(vaca.cargaOK)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y;
		}
	}
dibujar();
}


function dibujar()
{
if(fondo.cargaOK)
{
  papel.drawImage(fondo.imagen,0,0);
}
if(vaca.cargaOK)
{

  for(var i=0; i<10;i++)
  {
  papel.drawImage(vaca.imagen,xVaca[i],yVaca[i]);
  }
}
if (cerdo.cargaOK)
{
papel.drawImage(cerdo.imagen,xcerdo,ycerdo)

}
}



function aleatorio(min,maxi)
{
var resultado;
resultado= Math.floor(Math.random()*(maxi-min+1))+min;
return resultado;
}
