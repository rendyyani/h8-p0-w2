let nama = 'Rendy';
let peran = 'Ksatria';
// nama peran harus di input 
  if (nama !== '') {

   console.log(`halo ${nama}, Pilih peranmu untuk memulai game!`); 
  }else { 
    console.log('Tolong isi nama')
  }

//
if (peran === '' & nama !== '') {
  console.log();
} else if (peran === 'Ksatria' & nama !== '') {
  console.log(`Selamat datang di dunia Proxytia, ${nama}`)
  console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu`);
} else if (peran === 'Tabib' & nama !== '') {
  console.log(`selamat datang di dunia Proxytia, ${nama}`)
  console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran === 'Penyihir' & nama !== '') {
  console.log(`selamat datang di dunia Proxytia, ${nama}`)
  console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu`);
}
  else {
  console.log ('')
}
