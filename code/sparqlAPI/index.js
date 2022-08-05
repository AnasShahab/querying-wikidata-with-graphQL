class SPARQLQueryDispatcher {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	async query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
        console.log("The URL generated is "+fullUrl);
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `SELECT ?president
WHERE {
  ?president wdt:P106 wd:Q30461 .
  ?president wdt:P21 wd:Q6581072 .
  }
`;

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );
// console.log(queryDispatcher);
const myquery=await queryDispatcher.query( sparqlQuery );
// console.log(myquery)
myquery.results.bindings.map(item => console.log(item))
// myquery.results.bindings.map(item => console.log(item.president.value))