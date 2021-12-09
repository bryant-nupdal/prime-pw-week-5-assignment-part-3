console.log('***** Music Collection *****')
let collection = [];
function addToCollection (title, artist, yearPublished, songTitle, songDuration) {
  let albumInfo = { title: title,
                    artist: artist,
                    yearPublished: yearPublished,
                    tracks: [
                      {
                      title: songTitle,
                      duration: songDuration
                    }//End of object 'tracks'
                    ]
     // Left of colon is the key | To the right is the value
                  } //End of Object 'albumInfo'
  collection.push(albumInfo);
  return collection;
}//end of addToCollection function
addToCollection('This Ones For You Too', 'Luke Combs', '2017', 'Out There', '3:23');
addToCollection('What You See Isnt Always What You Get', 'Luke Combs', '2020', 'Beer Never Broke My Heart', '3:06' );
addToCollection('I Decided', 'Big Sean', '2017', 'Moves', '2:23' );
addToCollection('TV','Tai Verdes', '2021', 'A-OK', '2:54' );
addToCollection('Tickets To My Downfall', 'Machine Gun Kelly', '2020', 'Bloody Valentine', '3:25' );
addToCollection('State Im In', 'Filmore', '2020', 'Nothings Better', '3:13' );
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
console.log(search('',));
