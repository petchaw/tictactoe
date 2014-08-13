$(document).ready(function() {
	$("input:radio[name=shape]").click(function() {
    	shape = $(this).val();
	});
});

board = new Firebase("https://resplendent-fire-438.firebaseio.com/");
tic = board.child("tictactoe");

//LISTEN FOR REALTIME CHANGES
tic.on("value", function(data) {
	jQuery.each(data.val(), function(i, val) {
		if (val == "x")
			$("#"+i).html('<img src="images/x.png"/>');
		if (val == "o")
			$("#"+i).html('<img src="images/o.jpg"/>');
		if (val != "o" && val != "x")
			$("#"+i).html('<img src="images/b.jpg"/>');
	});
});

function play(pos) {
	item = {};
	item[pos] = shape;

	tic.update(item);

	if (shape == "x") {
		$("#"+pos).html('<img src="images/x.png"/>');
	}
	else {
		$("#"+pos).html('<img src="images/o.jpg"/>');
	}
}

function restart() {
	tic.update({"p1": "b"});
	tic.update({"p2": "b"});
	tic.update({"p3": "b"});
	tic.update({"p4": "b"});
	tic.update({"p5": "b"});
	tic.update({"p6": "b"});
	tic.update({"p7": "b"});
	tic.update({"p8": "b"});
	tic.update({"p9": "b"});
}