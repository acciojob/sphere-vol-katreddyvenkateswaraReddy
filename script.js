function volume_sphere() {
    //Write your code here
  let r=document.getElementById('MyForm').radius.value;
	
	document.getElementById('MyForm').volume.value=((4/3)*Math.PI*r*r*r).toFixed(4);
	 event.preventDefault();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;