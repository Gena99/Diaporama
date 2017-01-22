$(document).ready(function(){


var diaporama = {
	listImage : [
		{
			url: "http://placehold.it/500x250?text=photo1",
			titre : "photo1"
		},
		{
			url: "http://placehold.it/500x250?text=photo2",
			titre : "photo2"
		},
		{
			url: "http://placehold.it/500x250?text=photo3",
			titre : "photo3"
		},
		{
			url: "http://placehold.it/500x250?text=photo4",
			titre : "photo4"
		},
		{
			url: "http://placehold.it/500x250?text=photo5",
			titre : "photo5"
		}
	]
};


diaporama.listImage.forEach(function(image) {
    //console.log(image);
    $('ul').append('<li class="orbit-slide"><img class="orbit-image" src="' + image.url + '" alt="def"><figcaption class="orbit-caption">' + image.titre + '</figcaption></li>');
});
//$('.orbit').foundation();
	
	instanceDiaporama= new Foundation.Orbit($('.orbit'));
});