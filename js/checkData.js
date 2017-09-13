/*
=================== PSEUDOCODE =======================
Nama File   : checkData.js 
Fungsi		: Untuk mereset atau membuat struktur tabel data, dan membuat user defaul 
Dibuat Oleh : Nurkholis

	JIKA "typeof(localStorage)" tidak samadengan "undefined"
		JIKA "localStorage.userData" samadengan undefined
			SIMPAN "userData" sebagai tabel user default
			SIMPAN "dataPenjualan" sebagai format tabel data penjualan
			SIMPAN "itemPenjualan" sebagai format tabel data item/detail penjalan
			SIMPAN "temItem" sebagai format tabel data temporary penjualan 
			TAMBAHKAN "userData" ke localStorage dengan JSON 
			TAMBAHKAN "dataPenjualan" ke localStorage dengan JSON 
			TAMBAHKAN "itemPenjualan" ke localStorage dengan JSON 
			TAMBAHKAN "temItem" ke localStorage dengan JSON 
	JIKA TIDAK
		TAMPILKAN pesan peringatan "Oop's browser anda tidak mendukung localstorage"

=========================================================
*/

// localStorage.clear();

if (typeof(localStorage) !== "undefined") {
    if (localStorage.userData === undefined){
		var userData = { 'username': ["kasir1"], 'password': ["123"], 'status': [1] };
		var dataBarang = {	'id':["BR01","BR02","BR03","BR04","BR05"],
							'nama':["Mouse Logitec","Keyboard Logitec","Flashdisk 8GB","Speaker S300","LCD Samsung 17 INC"],
							'harga':[65000,80000,60000,250000,1050000],
							'stok':[10,10,15,5,5]
						 };
		var dataPenjualan = { 'noTrx':[],
							  'tanggal':[],
							  'kasir':[]
							}
		var itemPenjualan = { 'no':[],
							  'noTrx':[],
							  'id':[],
							  'nama':[],
							  'harga':[],
							  'qty':[],
							  'jumlah':[]
							}		
		var tempItem = { 'no':[],
						 'noTrx':[],
						 'id':[],
						 'nama':[],
						 'harga':[],
						 'qty':[],
						 'jumlah':[]
						}		

		localStorage.setItem('userData', JSON.stringify(userData));
		localStorage.setItem('dataBarang', JSON.stringify(dataBarang));
		localStorage.setItem('dataPenjualan', JSON.stringify(dataPenjualan));
		localStorage.setItem('itemPenjualan', JSON.stringify(itemPenjualan));
		localStorage.setItem('tempItem', JSON.stringify(tempItem));
    }
} else {
	alert("Oop's browser anda tidak mendukung penyimpanan lokal!");
}
console.log(localStorage);