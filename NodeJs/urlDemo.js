import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL object - 
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.hostname);


// format() - 
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));


const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get('q'));
params.append('limit', '5');
console.log(params);
params.delete('limit');
console.log(params);

// URL object
// - Parses the URL into readable parts (protocol, hostname, path, query, etc.)

// hostname
// - Returns only the domain name (no protocol, no path)

// format()
// - Converts a URL object back into a full URL string

// import.meta.url
// - Gives the current file location as a file:// URL (ES Modules only)

// fileURLToPath()
// - Converts a file:// URL into a normal system file path

// URLSearchParams
// - Used to read and modify query parameters from a URL

// params.get()
// - Gets the value of a specific query parameter

// params.append()
// - Adds a new query parameter (or allows duplicates)

// params.delete()
// - Removes a query parameter completely

