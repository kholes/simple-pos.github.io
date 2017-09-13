"use strict"
//==========Pseudocode===================//
/*

2. Buat form login.html
	TAMBAHKAN form set id samadengan "form-login"
	TAMBAHKAN label username
	TAMBAHKAN input type "text" set id samadengan "username" 
	TAMBAHKAN label password
	TAMBAHKAN input type "password" set id samadengan "password"
	TAMBAHKAN tombol submit set id samadengan "login"
3. Buat file login.js untuk menangani proses login
	SIMPAN "username" 
	SIMPAN "password" 
	SIMPAN "loginForm"
	BUAT event submit pada "loginForm" sebagai fungi(e)
	BUAT "loginForm" agar tidak langsung submit dengan e.preventDefault
	JIKA "isi username" samadengan kosong atau "isi password" samadengan kosong
		TAMPILKAN peringatan "Silahkan isi username atau password"
	JIKA TIDAK
		SIMPAN "userStorage" sebagai penyimpanan lokal
		SIMPAN "dbUser" sebagai nama data user
		SIMPAN "getUser" sebagai pengambil data dari "userStorage"
		SIMPAN "objUser" untuk menampung hasil pengambilan data / parsing oleh "getUser" dengan format JSON
		SIMPAN "len" sebagai panjang "objUser"
		ULANGI "i" sebanyak "len"
			JIKA "isi username" samadengan "objUser.username[i]"
				JIKA "isi password" samadengan "objUser.password[i]"
					JIKA "objUser.status" samadengan 1
						TAMPILKAN pesan "Selamat bekerja"
						ARAHKAN halaman ke "transaksi.html"
					JIKA TIDAK
						TAMPILKAN pesan "User anda belum diaktifkan, silahkan menghubungi administrator"
 				JIKA TIDAK
					TAMPILKAN pesan peringatan "Password yang anda masukan salah"
			JIKA TIDAK
				TAMPILKAN pesan peringatan "Username yang anda gunakan salah"

4. Buat halaman transaksi.html
	TAMBAHKAN input text set id "idBarang"
	TAMBAHKAN tombol set id "tambahItem"
	TAMBAHKAN div set id "listItem"
	TAMBAHKAN tombol set id "simpan"
5. Buat file transaksi.js

3. Buat halaman rekapitulasi.html
	
4. Buat halaman struk.html

6. Buat file javascript script.js
	


*/
/*

	// var hapus=document.createElement('button');
	// 	hapus.innerHTML='X';
	// 	var idHapus=this.objTemp.no[i];
	// 	hapus.onclick = function(idHapus){
	// 		idHapus.preventDefault();
	// 		alert(idHapus);
	// 		return;
	// 	}
	// 	listItem.appendChild(hapus);


var testObject = { 'username': ["jon","doo","mike"], 'pass': ["123","345","567"], 'status': [1,0,0] };

localStorage.setItem('testObject', JSON.stringify(testObject));
var retrievedObject = localStorage.getItem('testObject');
var objUser=JSON.parse(retrievedObject);
var arr_username=objUser.username;
arr_username.push('noni');

localStorage.setItem(objUser,JSON.stringify(objUser));
var retrievedObject = localStorage.getItem(objUser);
var objUser=JSON.parse(retrievedObject);
var arr_username=objUser.username;
console.log(objUser);


*/

console.log(localStorage.userData);
/*
function conectData(){
	this.userStorage=window.localStorage;
	this.dbUser='userData';
	this.getUser=this.userStorage.getItem(this.dbUser);
	this.objUser=JSON.parse(this.getUser);	
}

function DataUser(username,password){

	this.username=username;
	this.password=password;
	this.login=function(){
		var arr_username=objUser.username();
		console.log(arr_username);
		// for(var i=0;i<this.dataUser.length;i++){
		// 	if(this.dataUser[i][0]==username){
		// 		if(this.dataUser[i][1]==password){
		// 			if(this.dataUser[i][2]=="1"){
		// 				return "Selamat datang "+username+", selamat bekerja!";
		// 			}else{
		// 				return "Account anda belum diaktifkan, silahkan menghubungi administrator!";
		// 			}
		// 		}else{
		// 			return"Anda salah memasukan password!"
		// 		}
		// 	}else{
		// 		return "Nama user tidak ditemukan!";
		// 	}
		// }
	}
	this.ambilData=function(){
		return this.dataUser.length;		
	}
	this.aktifasi=function(){
		for(var i=0;i<this.dataUser.length;i++){
			if(this.dataUser[i][0]==username){
				if(this.dataUser[i][2]=='0'){
					this.dataUser[i].splice(2,1,'1');
				}else{
					this.dataUser[i].splice(2,1,'0');
				}
				return this.dataUser[i];
			}
		}
	}
	this.tambah=function(){
		var count=0;
		var len=this.dataUser.length;

		if(this.dataUser[0]==null){
			var userBaru=[""+username+"",""+password+"",'0'];
			this.dataUser=[];
			this.temp.push(userBaru);
			this.dataUser.push(this.temp);
			this.userStorage.setItem(this.dbKasir,this.dataUser);
			this.temp=[];		
		}else{
			// var arr=this.dataUser.split('');
			console.log(this.dataUser);
			// var userBaru=[""+username+"",""+password+"",'0'];
			// this.temp.push(userBaru);
			// this.dataUser.push(this.temp);
			
			// for(var i=0;i<this.dataUser.length;i++){
			// 	console.log(this.dataUser[i]);
			// 	if(this.dataUser[i][0]==username){
			// 		count++;
			// 	}
			// }				
			// if(count!=0){
			// 	return 'Data user sudah ada!, silahkan gunakan nama user yang lain!';
			// }else{
			// 	var userBaru=[""+username+"",""+password+"",'0'];
			// 	this.temp.push(userBaru);
			// 	this.dataUser.push(temp);
			// 	this.userStorage.setItem(this.dbKasir,this.dataUser);
			// }
		}
		//console.log(this.dataUser);
	}
	this.ubahPassword=function(){
		for(var i=0;i<this.dataUser.length;i++){
			if(this.dataUser[i][0]==this.username){
				this.dataUser[i].splice(1,1,this.password);
				this.dataUser.splice(i,1,this.dataUser[i]);
				return this.dataUser[i];
			}
		}
	}
	this.hapus=function(){
		for(var i=0;i<this.dataUser.length;i++){
			if(this.dataUser[i][0]==this.username){
				this.dataUser.splice(i,1);
				return this.dataUser;
			}
		}

	}
	this.clearDB=function(){
		this.userStorage.clear();
	}
}
// var kasir=new DataKasir('kasir21','12345678');
// console.log(kasir.tambah());

// var data=kasir.ambilData();
// var demo=document.getElementById('demo');
// demo.innerHTML=data;
// var dataBarang= [];

		  // var obj = JSON.parse(text);console.log('tes');
		  // document.getElementById("demo").innerHTML =
		  // obj.employees[2].firstName + " " + obj.employees[2].lastName;


// var dataUser = {'id':'1','username': 'kasir', 'password': '123456'};

// // Put the object into storage
// localStorage.setItem('dataUser', JSON.stringify(dataUser));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('dataUser');
// var dt=JSON.parse(retrievedObject);
// console.log(dt.username);
*/