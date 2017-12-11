console.log("js works");

$().ready(function() {
	$.getJSON("http://prs.doudsystems.com/Products/List")
		.done(function(products) {
			console.log(products);
			loadDropdown(products);
		});

	$("#pickProduct").click(pickProduct);	

});

function loadDropdown (products){
	var selectPrdt = $("select");
	var itemNbr = 0;
	selectPrdt.empty();
	var item = "";
	item = "<option id='opt0' placeholder='Pick a product'></option>"; //Blank option in dropdown as default
	selectPrdt.append(item);

	for (var p of products) {
		item = "";
		itemNbr ++;
		item += "<option id='opt" + itemNbr + "' value='" + p.ID + "'>" + p.Name + "</option>";
		selectPrdt.append(item);
	}
}

function pickProduct(){
	var pick = $("#pickProduct").val();
	getProductByID(pick);
}

function getProductByID(id) {
	$.getJSON("http://prs.doudsystems.com/Products/Get/" + id)
		.done(function(product) {
			console.log(product);
			console.log("product picked=" + id);
			populateProductDetails(product);
	});
}

function populateProductDetails(product){
	
	var prodDetails = $("#prdDtlsDiv");
	prodDetails.empty();
	var item = "";
    item += "<br><h4>Product Details</h4>";
	item += "<label for='id' class='label1'>Product ID</label>";
	item += "<input id='id' class='input1' type='label' value='" + product.ID + "' readonly><br>";
	item += "<label for='name' class='label1'>Product Name</label>";
	item += "<input id='name' class='input1' type='label' value='" + product.Name + "' readonly><br>";
	item += "<label for='partnbr' class='label1'>Vendor Part Number</label>";
	item += "<input id='partnbr' class='input1' type='label' value='" + product.VendorPartNumber + "' readonly><br>";
	item += "<label for='price' class='label1'>Price</label>";
	item += "<input id='price' class='input1' type='label' value='" + product.Price + "' readonly><br>";
	var vendorName = product.Vendor.Name;
	item += "<label for='vendor' class='label1'>Vendor</label>";
	item += "<input id='vendor' class='input1' type='label' value='" + vendorName + "' readonly><br>";

	prodDetails.append(item);
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
	// inputitems.css("border-color", "lightgrey");
}

// function getVendorName (id){
// 	console.log("vendor id=" + id);
// 	var vname = "";
// 	$.getJSON("http://prs.doudsystems.com/Vendors/Get/" + id)
// 		.done(function(vendor) {
// 			console.log(vendor);
// 			vname = vendor.Name;
// 			console.log("vname getJSON=" + vname);
// 		return vname;		
// 	});
// }



