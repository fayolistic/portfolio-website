function showNavbar(){
    
   document.getElementById('navbar').style.display='grid';
   document.getElementById('hamburger').style.display='none';
   document.getElementById('close-icon').style.display='block';
   document.getElementById('body').style.overflowY='hidden';


}
function hideNavbar(){
    document.getElementById('navbar').style.display='none';
    document.getElementById('close-icon').style.display='none';
    document.getElementById('hamburger').style.display='block';
    document.getElementById('body').style.overflowY='hidden';
    document.getElementById('body').style.overflowY='scroll';
 }
