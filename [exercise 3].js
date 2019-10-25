// Input nama dan peran
// Pilihan nama 
let nama = 'lucinta-luna';
let peran = 'waria';

//Output untuk input nama dan peran
  if (nama =='' && peran =='') {
    console.log('Nama harus diisi!');
  }
//Output jika peran belum dipilih
  else if (nama == ''  || peran =='') {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
  }
//Output jika nama dan peran 'Ksatria' telah dipilih
  else if ( peran == 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia,${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
  }
 //Output jika nama dan peran 'Tabib' telah dipilih
  else if (peran == 'Tabib') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama} ${peran}, kamu dapat membantu temanmu yang terluka.`);
  } 
 //Output jika nama dan peran  'Penyihir' telah dipilih
  else if (peran == 'Penyihir') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama} ${peran}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } 
 // Output jika peran yang dimasukan tidak sesuai
  else {
    console.log( `${nama}, peran yang dipilih tidak ada dalam pilihan`)
  }


  
    
  
  

