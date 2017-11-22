$(function(){
	var arr=" ";
	var a=0;
	$('.dle .pass').change(function(){
		arr = $('.dle .pass').val();
		$('.dle .hidel').val(arr);
	});
	$('.dle .hidel').change(function(){
		arr = $('.dle .hidel').val();
		$('.dle .pass').val(arr);
	});
	$('.dle .show').click(function(){
		a++;
		if (a%2==1){
			$('.dle .pass').hide();
			$('.dle .hidel').show();
			$('.dle .show_x').hide();
			$('.dle .show_y').show();
		}
		if (a%2==0){
			$('.dle .pass').show();
			$('.dle .hidel').hide();
			$('.dle .show_x').show();
			$('.dle .show_y').hide();
		}
	});
});

















 