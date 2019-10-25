let date = '29' 
let month = '2' 
let year = '2200' 
// Output bulan january
switch (month)
 {
    case '1':
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' January ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan febuary   
   case '2':
   if ((date > 0 && date < 30) && (year >= 1900 && year < 2201)) {
    console.log(date +' Febuary ' + year);
   }
   else {
     console.log ('Cek kembali tangal dan tahun yang di input! Jumlah hari di bulan febuary hanya 29 dan input tahun antara 1900 -2200.' );
   }break;
//Output bulan March
   case '3': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' March ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan April
case '4': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' April ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan May
case '5': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' May ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan June
case '6': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' June ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan July
case '7': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' August ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan August
case '8': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' August ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan September
case '9': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' September ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan October
case '10': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' October ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan November
case '11': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' November ' +  year);   
    }
     else {
    console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
//Output bulan December
case '12': 
    if ((date > 0 && date < 32)  && (year >= 1900 && year < 2201 )) {
     console.log(date +' December ' +  year);   
    }
     else {
     console.log ('Cek kembali tangal dan tahun yang di input! input tanggal antara 1 - 31 dan input tahun antara 1900 -2200.')
} break;
 Default: console.log('input format tanggal,bulan, dan tahun dengan benar')
 }