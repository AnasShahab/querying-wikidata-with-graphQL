import {Client} from "graphql-ld";
import {QueryEngineSparqlEndpoint} from "graphql-ld-sparqlendpoint";

// Define a JSON-LD context

const context = {
  "@context": {
    "instance": "http://www.wikidata.org/prop/direct/P31",
    "film": { "@id": "http://www.wikidata.org/entity/Q11424" },
    "name": "http://www.wikidata.org/prop/direct/P1476",
    "starring": "http://www.wikidata.org/prop/direct/P161",
    "label": {"@id": "http://www.w3.org/2000/01/rdf-schema#label", "@language": "en"}
  }
};

// Create a GraphQL-LD client based on a SPARQL endpoint
const endpoint = 'https://query.wikidata.org/sparql';
// const endpoint = 'http://dbpedia.org/sparql';
const client = new Client({ context, queryEngine: new QueryEngineSparqlEndpoint(endpoint) });

// Define a query

const query = `
query @single {
  id @single (instance: film ) {
    name
    starring (label: "Brad Pitt")
    }
}`;

// Execute the query
const { data } = await client.query({ query });
console.log(data)