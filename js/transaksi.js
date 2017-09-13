/*
=================== PSEUDOCODE =======================
Nama File   : transaksi.js 
Fungsi		: Merupakan proses inti dari program, menangani seluruh proses dan membuat struk
Dibuat Oleh : Nurkholis

SIMPAN "pilihBarang" untuk menapilkan data barang
SIMPAN "simpan" sebagai tombol simpan
SIMPAN "listItem" untuk menapilkan data belanja sementara / temporary
BUAT "eventListener" untuk menangkap "pilihan" pada daftar pilihan barang.
JIKA "pilihan" barang ada yang dipilih
	SIMPAN DAN TAMPILKAN perintah untuk memasukan jumlah barang dalan variable "qty"
	JIKA TIDAK "qty" kembalikan / batalkan
	JIKA YA panggil fungsi "tambahItem" dengan parameter "idBarang","qty"
BUAT "evenetListener" untuk menangkap event "klik" pada tombol simpan
JIKA "tombol simpan" di klik
	BUAT penahan program untuk menahan 
BUAT "evenetListener" untuk menangkap event "klik" pada tombol rekap
BUAT "onclick" pada tombol baru

SIMPAN "transaksi" sebagai Objek "Transaksi"
PANGGIL "transaksiHeader" prototype dari Transaksi "untuk mengisi data halaman utama"
PANGGIL "cariBarang" prototype dari Transaksi "untuk membuat listBarang / daftar barang"

SIMPAN "userStorage" samadengan localStorage untuk data user
SIMPAN "dbUser" samadengan userData sebagai nama tabel 
SIMPAN "getUser" sebagai penampung untuk mengambil data dari localStorage
SIMPAN "objUser" samadengan JSON Parsing dari "getUser"

SIMPAN "barangStorage" samadengan localStorage untuk data barang
SIMPAN "dbBarang" samadengan "dataBarang" sebagai nama tabel 
SIMPAN "getBarang" sebagai penampung untuk mengambil data dari localStorage
SIMPAN "objBarang" samadengan JSON Parsing dari "getUser"
SIMPAN "idBarang" samadengan "objBarang.id" untuk menampung Array idBarang dari objek Barang
SIMPAN "namaBarang" samadengan "objBarang.nama" untuk menampung Array namaBarang dari objek Barang
SIMPAN "hargaBarang" samadengan "objBarang.harga" untuk menampung Array hargaBarang dari objek Barang
SIMPAN "stokBarang" samadengan "objBarang.stok" untuk menampung Array stokBarang dari objek Barang

SIMPAN "penjualanStorage" samadengan localStorage untuk data user
SIMPAN "dbPenjualan" samadengan penjalanData sebagai nama tabel 
SIMPAN "getPenjalan" sebagai penampung untuk mengambil data dari localStorage
SIMPAN "objPenjalan" samadengan JSON Parsing dari "getPenjualan"

BUAT prototype "numerator" untuk membuat nomor transaksi
SIMPAN "noTrx" samadengan "objPenjualan.noTrx" mengabil Array dari objek penjalan
JIKA "noTrx.length" samadengan "0"
	SIMPAN "noTrx" samadengan "0001"
JIKA TIDAK
	SIMPAN "lastIndex" samadengan "noTrx[noTrx.length-1]" mengambil index paling terakhir pada Array noTrx
	SIMPAN "no" samadengan "number(lastIndex)" merubah tipe bilangan string menjadi integer
	SIMPAN "no" DITAMBAHKAN 1
	SIMPAN "len" samadengan "panjang no"
	JIKA "len" samadengan 1
		SIMPAN "noTrx" samadengan "000" ditambahkan string "no"
	JIKA "len" samadengan 2
		SIMPAN "noTrx" samadengan "00" ditambahkan string "no"
	JIKA "len" samadengan 3
		SIMPAN "noTrx" samadengan "0" ditambahkan string "no"
	JIKA "len" samadengan 4
		SIMPAN "noTrx" samadengan "no"
KEMBALIKAN NILAI "noTrx"

BUAT prototype "tanggal" untuk memformat tanggal ke format indonesia
SIMPAN "Date" samadengan NewDate()
SIMPAN "strDate" samadengan konversi "Date" ke String
SIMPAN "hri" samadengan substring dari "strDate(0,3)"
SIMPAN "tgl" samadengan substring dari "strDate(8,2)"
SIMPAN "bln" samadengan substring dari "strDate(4,3)"
SIMPAN "thn" samadengan substring dari "strDate(11,4)"
KONDISIKAN "bln" menjadi angka dengan SWITCH
KEMBALIKAN NILAI tgl-bln-thn

BUAT prototype "convert" untuk merubah format angka menjadi format rupiah

BUAT prototype "rekap" untuk mengisi data pada halaman rekap.html

BUAT prototype "header" untuk mengisi data pada header transaksi.html
BUAT prototype "cari" untuk mengisi data dan membuat select menu list barang pada halaman transaksi.html
BUAT prototype "rekap" untuk mengisi data pada halaman rekap.html
BUAT prototype "tambahItem" untuk menampug data belanja sementara pada Array objek Temp
BUAT prototype "cetak" untuk mengisi data pada struk pembelian
BUAT prototype "rekap" untuk mengisi data pada halaman rekap.html
BUAT prototype "simpan" untuk menyimpan data transaksi ke localStorage
=========================================================
*/
var Transaksi=function(){
	//list variabel data transaksi pejualan
	this.userStorage=window.localStorage;
	this.dbUser='userData';
	this.getUser=this.userStorage.getItem(this.dbUser);
	this.objUser=JSON.parse(this.getUser);
	//list variabel data barang
	this.barangStorage=window.localStorage;
	this.dbBarang='dataBarang';
	this.getBarang=this.barangStorage.getItem(this.dbBarang);
	this.objBarang=JSON.parse(this.getBarang);
	this.idBarang=this.objBarang.id;
	this.namaBarang=this.objBarang.nama;
	this.hargaBarang=this.objBarang.harga;
	this.stokBarang=this.objBarang.stok;
	//list variabel data transaksi pejualan
	this.penjualanStorage=window.localStorage;
	this.dbPenjualan='dataPenjualan';
	this.getPenjualan=this.penjualanStorage.getItem(this.dbPenjualan);
	this.objPenjualan=JSON.parse(this.getPenjualan);
	//list variabel data transaksi item penjualan
	this.itemStorage=window.localStorage;
	this.dbItem='itemPenjualan';
	this.getItem=this.itemStorage.getItem(this.dbItem);
	this.objItem=JSON.parse(this.getItem);
	//list variabel data transaksi item temp
	this.tempStorage=window.localStorage;
	this.dbTemp='tempItem';
	this.getTemp=this.tempStorage.getItem(this.dbTemp);
	this.objTemp=JSON.parse(this.getTemp);
	this.total=0;

	console.log("TABEL USER :"+this.getUser);
	console.log("TABEL PENJUALAN :"+this.getPenjualan);
	console.log("TABEL PENJALAN ITEM :"+this.getItem);
	console.log("TABEL PENJALAN TEMP :"+this.getTemp);
}
Transaksi.prototype.numerator=function(){
	 //set numerator
	 var noTrx=this.objPenjualan.noTrx;	
	 if(noTrx.length==0){
	 	noTrx='0001';
	 }else{
	 	var lastIndex=noTrx[noTrx.length-1];
		var no=parseInt(lastIndex);
		var no=no+1;
		var len=String(no).length;		 
		if(len==1){
			noTrx='000'+no;
		}else if(len==2){
			noTrx='00'+no;
		}else if(len==3){
			noTrx='0'+no;
		}else if(len==4){
			noTrx=no;
		}
	 }
	 return noTrx;
}
Transaksi.prototype.tanggal=function(){
	//set format tanggal
	var date=new Date();
	var strDate=date.toString();
	var hri=strDate.substr(0,3);
	var tgl=strDate.substr(8,2);
	var bln=strDate.substr(4,3);
	var thn=strDate.substr(11,4);
	switch(bln){
		case 'Jan' || 01:bln='01';break;
		case 'Feb' || 02:bln='02';break;
		case 'Mar' || 03:bln='03';break;
		case 'Apr' || 04:bln='04';break;
		case 'Mei' || 05:bln='05';break;
		case 'Jun' || 06:bln='06';break;
		case 'Jul' || 07:bln='07';break;
		case 'Aug' || 08:bln='08';break;
		case 'Sep' || 09:bln='09';break;
		case 'Okt' || 10:bln='10';break;
		case 'Nov' || 11:bln='11';break;
		case 'Des' || 12:bln='12';break;
	}
	return tgl+"-"+bln+"-"+thn;
}
Transaksi.prototype.convert=function(num){
	//Set format rupiah
	var str=num.toString(),
	len=str.length,
	sisa=len%3,
	rupiah=str.substr(0,sisa),
	ribuan=str.substr(sisa).match(/\d{3}/g);
	if(ribuan){
		separator=sisa ? '.' : '';
		rupiah+=separator + ribuan.join('.');
	}
	return rupiah;
}
Transaksi.prototype.getKasir=function(){
	return "kasir1";
}
Transaksi.prototype.rekap=function(){
	var rekap=null;
	if(rekap==null){
		var tglRekap=this.tanggal();
		var kasir=this.getKasir();
		var res='';
		var trx=0;
		var c=0;
		var total=0;
    	var objHead=transaksi.objPenjualan;
    	var objItem=transaksi.objItem;
    	res+="<table width='100%' height='200' cellpading='0' cellspacing='1' border='0'>";
    	res+="<th align='left' width='20'>No.</th><th align='center'>No.TRX</th><th align='center'>ID.BRG</th><th align='left'>Nama Brg.</th><th align='right'>Harga</th><th align='center'>QTY</th><th align='center'>Jumlah</th>";
    	
    	for(var i=0;i<objHead.tanggal.length;i++){
    		if(objHead.tanggal[i]==tglRekap && objHead.kasir[i]==kasir){
    			// console.log(objHead.noTrx[i]);
    			for(var j=0;j<objItem.noTrx.length;j++){
    				if(objItem.noTrx[j]==objHead.noTrx[i]){
    					res+="<tr>";
    					res+="<td align='left'>"+(c+=1)+"</td>";
    					res+="<td align='center'>"+objItem.noTrx[j]+"</td>";
    					res+="<td align='center'>"+objItem.id[j]+"</td>";
    					res+="<td align='left'>"+objItem.nama[j]+"</td>";
    					res+="<td align='right'>"+this.convert(objItem.harga[j])+"</td>";
    					res+="<td align='center'>"+objItem.qty[j]+"</td>";
    					res+="<td align='right'>"+this.convert(objItem.jumlah[j])+"</td>";
    					total+=objItem.jumlah[j];
    					res+="</tr>";
    					trx++;	
    				}
    			}
    			
    		}
    	}
    	
    	res+="<tr>";
    	res+="<td colspan='6'>TOTAL PENJALAN</td>";
    	res+="<td align='right'>Rp. "+this.convert(total)+"</td>";
    	res+="</tr></table>";
    	console.log(res);
    	if(trx > 0){
			rekap=window.open('rekap.html','page','navigator=0,toolbar=0,scrollbars=0,location=0,statusbar=0,number=0,resizable=1,left=50,right=50,titlebar=0,width=980,height=600')
			rekap.onload=function(){
				rekap.document.getElementById('tanggal').innerHTML=tglRekap;
				rekap.document.getElementById('kasir').innerHTML=kasir;
				rekap.document.getElementById('content').innerHTML=res;
			}
    	}else{
    		alert("Anda belum melakukan transaksi hari ini!.");
    		return;
    	}
	}
}
Transaksi.prototype.header=function(){
	//Set data transaksi
	this.noTransaksi=document.getElementById('noTrx').innerHTML=this.numerator();
	this.tglTransaksi=document.getElementById('tanggal').innerHTML=this.tanggal();
	this.userId=document.getElementById('userId').innerHTML=this.getKasir();
}
Transaksi.prototype.cari=function(){
	//menapilkan daftar barang dengan element select
	var cariBarang=document.getElementById('cariBarang');
	var selectBarang=document.createElement('select');
	selectBarang.id='pilihBarang';
	cariBarang.appendChild(selectBarang);
	for(i=0;i<this.namaBarang.length;i++){
		var option=document.createElement('option');
		option.value=this.idBarang[i];
		option.text=this.namaBarang[i]+" - Rp. "+this.convert(this.hargaBarang[i]);
		selectBarang.appendChild(option);
	}
}
Transaksi.prototype.tambahItem=function(id,qty){
	//Daftar belanja sementara (Temporary list)
	var item=this.objTemp;
	for(var i=0;i<this.idBarang.length;i++){
		if(id==this.idBarang[i]){
			item.no.push(this.objTemp.no.length+1);
			item.noTrx.push(this.numerator());
			item.id.push(this.idBarang[i]);
			item.nama.push(this.namaBarang[i]);
			item.harga.push(this.hargaBarang[i]);
			item.qty.push(qty);
			item.jumlah.push(qty*this.hargaBarang[i]);
		}
	}
	var listItem=document.getElementById('listItem');
	var i=this.objTemp.no.length-1;
	var listText=document.createElement('div');
	listText.setAttribute(id, i);
	listText.innerHTML=this.objTemp.no[i]+". "+this.objTemp.id[i]+
	" "+this.objTemp.nama[i]+" "+this.convert(this.objTemp.harga[i])+
	" <b>"+this.objTemp.qty[i]+"</b> "+this.convert(this.objTemp.jumlah[i]);
	listItem.appendChild(listText);	
	var total=this.total+=this.objTemp.jumlah[i];
	document.getElementById('total').innerHTML=this.convert(total);
}
Transaksi.prototype.cetak=function(noTrx){
	var struk=null;
	if(struk==null){
		struk=window.open('struk.html','page','navigator=0,toolbar=0,scrollbars=0,location=0,statusbar=0,number=0,resizable=1,left=50,right=50,titlebar=0,width=400,height=500');
    	struk.onload=function(){
    		var res='';
    		var objHead=transaksi.objPenjualan;
    		var objItem=transaksi.objItem;
    		var len=objItem.noTrx.length;
    		var i=objHead.noTrx.indexOf(noTrx);
    		console.log(objHead.noTrx[i]);
     		struk.document.getElementById('noTrx').innerHTML="No."+objHead.noTrx[i];
     		struk.document.getElementById('tanggal').innerHTML="Tanggal : "+objHead.tanggal[i];
     		struk.document.getElementById('kasir').innerHTML="Kasir : "+objHead.kasir[i];
     		var total=0;
			res+="===========================================";
    		for(var i=0;i<len;i++){
    			if(objItem.noTrx[i]==noTrx){
    				res+="<p>"+objItem.no[i]+". "+objItem.nama[i]+" "+transaksi.convert(objItem.harga[i])+" "+
    				objItem.qty[i]+" "+transaksi.convert(objItem.jumlah[i])+"</p>";
    				total+=objItem.jumlah[i];
    			}
    		}
 			res+="===========================================";
    		struk.document.getElementById('strukList').innerHTML=res;
    		struk.document.getElementById('total').innerHTML="Total : Rp. "+transaksi.convert(total);
    		struk.window.print();
    	}
    }
}
Transaksi.prototype.simpan=function(){
	var no=this.objTemp.no;
	if(no!=0){
		//simpan data header penjualan di localStorage
		this.objPenjualan.noTrx.push(this.noTransaksi);
		this.objPenjualan.tanggal.push(this.tglTransaksi);
		this.objPenjualan.kasir.push(this.userId);
		localStorage.setItem(this.dbPenjualan, JSON.stringify(this.objPenjualan));
		for(var i=0;i<no.length;i++){
			this.objItem.no.push(this.objTemp.no[i]);
			this.objItem.noTrx.push(this.objTemp.noTrx[i]);
			this.objItem.id.push(this.objTemp.id[i]);
			this.objItem.nama.push(this.objTemp.nama[i]);
			this.objItem.harga.push(this.objTemp.harga[i]);
			this.objItem.qty.push(this.objTemp.qty[i]);
			this.objItem.jumlah.push(this.objTemp.jumlah[i]);
		}
		localStorage.setItem(this.dbItem, JSON.stringify(this.objItem));
		this.cetak(this.noTransaksi);
	}else{
		alert("Tidak ada barang yang di pilih, silahkan pilih barang dahulu!");
		return;
	}
}

var transaksi=new Transaksi();
transaksi.header();
transaksi.cari();

// transaksi.cetak('0003');
var listItem=document.getElementById('listItem');
var simpan=document.getElementById('simpan');
var baru=document.getElementById('baru');
var keluar=document.getElementById('keluar');
var pilihBarang=document.getElementById('pilihBarang');
pilihBarang.addEventListener('change', function(){
	var qty=prompt("JUMLAH",1);
	if(!qty){
		return;
	}
	transaksi.tambahItem(pilihBarang.value,qty);
});
simpan.addEventListener('click', function(){
	transaksi.simpan();
});
baru.addEventListener('click', function(){
	window.location.reload();
});
rekap.addEventListener('click', function(){
	transaksi.rekap();
});
keluar.addEventListener('click', function(){
	window.location='index.html';
});