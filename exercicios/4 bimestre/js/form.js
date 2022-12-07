
window.onload =function(){
 let nomeFora = document.getElementById("nome");
 nome.focus();
}
//nomeada
function campoNome(){
	let nome = document.getElementById("nome");// referencia html
	let campoOb = document.getElementsByTagName("span");// array


	if(nome.value.length == 0){
		campoOb[0].style.color="red";
		campoOb[0].innerHTML="*";
		nome.focus();
		//return false;
	}else{
		campoOb[0].innerHTML="";
		
	}

}

function campoNomeChange(){
   let nome = document.getElementById("nome");
   let campoOb = document.getElementsByTagName("span");
   if(nome.value.length < 3){
	    campoOb[0].style.color="red";
		campoOb[0].innerHTML="*";
   }else{
	    campoOb[0].innerHTML="";
   }


}

function campoCpf(){
	let icpf = document.getElementById("cpf");
	let campoOb = document.getElementsByTagName("cpf"); 
	var cpf = document.getElementById('cpf')
        if (cpf.value.length == 3 || cpf.value.length == 7 ){
            cpf.value +="."
		} else if(cpf.value.length == 11) {
			cpf.value += "-"
		}
		
} 
function campotel(){
	var tel = document.getElementById('tel')
        if (tel.value.length == 5 || tel.value.length == 7 ){
            cpf.value +="-"
		} else if(cpf.value.length == 11) {
			cpf.value += "-"
		}
		
}
	

	console.log(icpf.value);


// function mascara_cpf(){
//         var cpf = document.getElementById('cpf')
//         if (cpf.value.length == 3 || cpf.value.length == 7 ){
//             cpf.value +="."
//         } 
//     } else if()   


// function formulario(){
//    let ret = false;
//    ret =	campoNome();
//    return ret;
// }