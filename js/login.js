/*
=================== PSEUDOCODE =======================
Nama File   : login.js 
Fungsi		: Untuk menangani proses autentifikasi user/kasir
Dibuat Oleh : Nurkholis

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

=========================================================
*/
var username=document.getElementById('username');
var password=document.getElementById('password');
var loginForm=document.getElementById('login-form');
loginForm.addEventListener('submit', function(e){
	e.preventDefault();
	if(username.value === '' || password.value === ''){
		alert("Silahkan isi username atau password!");
		return;
	}else{
		var userStorage=window.localStorage;
		var dbUser='userData';
		var getUser=userStorage.getItem(dbUser);
		var objUser=JSON.parse(getUser);
		var len=objUser.username.length;
		for(var i=0;i<len;i++){
			if(username.value === objUser.username[i]){
				if(password.value === objUser.password[i]){
					if(objUser.status[i] === 1){
						alert("Selamat Bekerja!");
						window.location='transaksi.html?'+objUser.username[i]+'';
					}else{
						alert("User anda belum diaktifkan, silahkan menghubungi admin.");
						return;
					}
				}else{
					alert("Anda salah memasukan password!");
				}
			}else{
				alert("Username yang anda gunakan salah!");
			}
		}
	}
});