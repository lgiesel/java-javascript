console.log("js works");

$().ready(function() {
	$.getJSON("http://prs.doudsystems.com/Vendors/List")
		.done(function(vendors) {
			console.log(vendors);
			buildTable(vendors);
		});
	// console.log("After vendors");

	$("#btnVendor").click(pickVendor);
	console.log("after ready.pick vendor");

});

function buildTable (vendors){
	var tbody = $("#vendors");
	tbody.empty();

	for (var v of vendors) {
		var recommended = (v.IsRecommended ? "Yes" : "No");
		var item = "<tr>";
		item += "<td>" + v.ID + "</td>";
		item += "<td>" + v.Code + "</td>";
		item += "<td>" + v.Name + "</td>";
		item += "<td>" + v.City + ", " + v.State + "</td>";
		item += "<td>" + v.Phone + "</td>";
		item += "<td>" + v.Email + "</td>";
		item += "<td>" + recommended + "</td>";
	    item += "<tr>";
		tbody.append(item);
	}

	var h4item = $("h4");
	var labelitems = $(".label1");
	var inputitems = $(".input1");

	h4item.css("margin-left", "5em");
	labelitems.css("float", "left"); 
	labelitems.css("width", "10em"); 
	labelitems.css("text-align", "right");
	inputitems.css("margin-left", "1em");
	inputitems.css("margin-bottom", ".5em");
	inputitems.css("width", "35em");
	inputitems.css("border", "0px");
}

function pickVendor(id){
	console.log("in pick vendor");
	var vPk = $("#vendor").val();
	$.getJSON("http://prs.doudsystems.com/Vendors/Get/" + vPk)
		.done(function(vendor) {
			console.log(vPk);
			console.log(vendor);
			populateVendor(vendor);
		});
	console.log("end of pick vendor");	
}

function populateVendor(vendor){
	var formitem = $("form");
	var vendorDetails = $("#vendorDtlsDiv");
	vendorDetails.empty();
	var item = "";	
    item += "<br><h4>Vendor Details</h4>";
	item += "<label for='id' class='label1'>Vendor ID</label>";
	item += "<input id='id' class='input1' type='label' value='" + vendor.ID + "' readonly><br>";
	item += "<label for='code' class='label1'>Code</label>";
	item += "<input id='code' class='input1' type='label' value='" + vendor.Code + "' readonly><br>";	
	item += "<label for='name' class='label1'>Vendor Name</label>";
	item += "<input id='name' class='input1' type='label' value='" + vendor.Name + "' readonly><br>";
	item += "<label for='address' class='label1'>Address</label>";
	item += "<input id='address' class='input1' type='label' value='" + vendor.Address + "' readonly><br>";
	item += "<label for='city' class='label1'>City/State/Zip</label>";
	item += "<input id='city' class='input1' type='label' value='" + vendor.City + "' readonly>";
	// item += "<label for='state' class='label1'>State</label>";
	item += "<input id='state' class='input1' type='label' value='" + vendor.State + "' readonly>"; 
	// item += "<label for='zip' class='label1'>Zip</label>";
	item += "<input id='zip' class='input1' type='label' value='" + vendor.Zip + "' readonly><br>";
	item += "<label for='phone' class='label1'>Phone</label>";
	item += "<input id='phone' class='input1' type='label' value='" + vendor.Phone + "' readonly><br>";
	item += "<label for='email' class='label1'>Email</label>";
	item += "<input id='email' class='input1' type='label' value='" + vendor.Email + "' readonly><br>";

	vendorDetails.append(item);
	var h4item = $("h4");
	var labelitems = $(".label1");
	var inputitems = $(".input1");

	h4item.css("margin-left", "5em");
	labelitems.css("float", "left"); 
	labelitems.css("width", "10em"); 
	labelitems.css("text-align", "right");
	inputitems.css("margin-left", "1em");
	inputitems.css("margin-bottom", ".5em");
	inputitems.css("width", "10em");
	inputitems.css("border", "0px");
}
