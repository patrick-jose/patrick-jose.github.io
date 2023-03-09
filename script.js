var cnt = 1;
function mudaImagem(seta) 
{
	var rotator = document.getElementById('galeria');
	var caminho = "imagens/foto";
	var formato = ".jpg";
    if (seta == "segue")
	{	
		if (cnt < 8) 
		{
			cnt++;
			galeria.src = caminho + cnt + formato;
		}
		else if (cnt == 8) 
		{		
			cnt = 1;
			galeria.src = caminho + cnt + formato;
		}
	}
	if (seta == "volta")
	{
		cnt = cnt - 1;
		if (cnt > 0)
		{
			galeria.src = caminho + cnt + formato;
		}
		else
		{
			cnt = 8;
			galeria.src = caminho + cnt + formato;
		}	
	}
}
