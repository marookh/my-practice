let countries = ['Australia', 'Cuba', 'Senegal'];

function alphaInsert(array, element) {
  array.push(element);
  return array.sort();
}

alphaInsert(countries, 'Brazil');
console.log(countries.join(','));
alphaInsert([], 'Brazil');           	// Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');   // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');      	// At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     	// Duplicate entry