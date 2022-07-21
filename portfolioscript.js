function showNavbar(){
    
   document.getElementById('navbar').style.width='100%';
   document.getElementById('navbar').style.visibility='visible';
   document.getElementById('hamburger').style.display='none';
   document.getElementById('close-icon').style.display='block';

}
function hideNavbar(){
   document.getElementById('navbar').style.width='0em';
    document.getElementById('navbar').style.visibility='hidden';
    document.getElementById('close-icon').style.display='none';
    document.getElementById('hamburger').style.display='block';
 }
