function switchOff(){
	document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
	document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('switchStatus').textContent='switched Off';
    document.getElementById('switchCol').style.backgroundColor='grey';
    document.getElementById('switchCols').style.backgroundColor='green';


}



function switchOn(){
	document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

	document.getElementById('catImage').src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switchStatus').textContent='switched On'
       document.getElementById('switchCol').style.backgroundColor='green';
    document.getElementById('switchCols').style.backgroundColor='grey';
}
