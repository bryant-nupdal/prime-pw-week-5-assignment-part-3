console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished) {
  let albumInfo = { title: title,
                    artist: artist,
                    yearPublished: yearPublished
     // Left of colon is the key | To the right is the value
                  } //End of Object 'albumInfo'
  collection.push(albumInfo);
  return collection;
}//end of addToCollection function
addToCollection('This Ones For You Too', 'Luke Combs', '2017' );
addToCollection('What You See Isnt Always What You Get', 'Luke Combs', '2020' );
addToCollection('I Decided', 'Big Sean', '2017' );
addToCollection('TV','Tai Verdes', '2021' );
addToCollection('Tickets To My Downfall', 'Machine Gun Kelly', '2020' );
addToCollection('State Im In', 'Filmore', '2020' );
// Added 6 albums to the function to be put in collection array--
console.log(collection);// log the collection array to console

function showCollection(array){
  console.log('How long is the array: ', array.length);
  for (let i=0; i<array.length; i++){
    console.log(array[i]);
  }//End for loop
}//End show collection function
  showCollection(collection);//Testing

function findByArtist(input){
   let results = [];
   console.log('Currently looking for an artist based on imput: ', input);
   for (let i=0; i<collection.length; i++){
    const temp = collection[i];
    if (input === temp.artist){
      results.push(temp);
      console.log( ' The array for the artist in the collection is: ');
    }//End If

  }// End for loop
    return results;
}// End findByArtist Function
console.log(findByArtist('Luke Combs')); //Should appear twice
console.log(findByArtist('Two Friends')); // Should not appear because it is not in the collection
console.log(findByArtist('Machine Gun Kelly')); //Should appear once
console.log(findByArtist('Filmore')); // Should appear once

function search( artist, year ){
  let searchArray = [];
  console.log('Currently searching for: ', artist, ' and ', year);
  for (let i = 0; i < collection.length; i++){
    const temp = collection[i];
    if (artist === temp.artist && year === temp.yearPublished){
      searchArray.push(temp);
      console.log('The matching albums in the collection are: ');
    }// End of first If
    if (artist == null || artist == '' && year == null || year == ''){
      console.log(temp);
    }// End of second If
  }//End of for loop
  return searchArray;
}//End of Function
console.log(search('Ray Charles', '1957'));
console.log(search('Filmore', '2020'));
console.log(search());
