let buah = [];

buah.push('Apel','Mangga','Jeruk','Semangka','Pisang','Anggur','Nanas');

buah.sort();
buah.forEach(function(item,index){
  console.log(`${index + 1}. ${item}  `)
})