import {Client} from "graphql-ld";
import {QueryEngineSparqlEndpoint} from "graphql-ld-sparqlendpoint";

// Define a JSON-LD context
const context = {
  "@context": {
    "Film": "http://www.wikidata.org/entity/Q11424",
    "label": { "@id": "http://www.w3.org/2000/01/rdf-schema#label", "@language": "en" },
    "starring": "http://www.wikidata.org/prop/direct/P161"
  }
};

// Create a GraphQL-LD client based on a SPARQL endpoint
const endpoint = 'https://query.wikidata.org/sparql';
  // const endpoint = 'http://dbpedia.org/sparql';
const client = new Client({ context, queryEngine: new QueryEngineSparqlEndpoint(endpoint) });

// Define a query
const query = `
query @single {
  id
  ... on Film {
    starring(label: "Brad Pitt")
  }
}`;

// Execute the query
const { data } = await client.query({ query });
console.log(data)

//output
/* {
  starring: [ 'http://www.wikidata.org/entity/Q35332' ],
  id: [
    'http://www.wikidata.org/entity/Q28196',
    'http://www.wikidata.org/entity/Q136264',
    'http://www.wikidata.org/entity/Q153723',
    'http://www.wikidata.org/entity/Q167051',
    'http://www.wikidata.org/entity/Q175038',
    'http://www.wikidata.org/entity/Q179798',
    'http://www.wikidata.org/entity/Q183239',
    'http://www.wikidata.org/entity/Q186587',
    'http://www.wikidata.org/entity/Q190050',
    'http://www.wikidata.org/entity/Q190908',
    'http://www.wikidata.org/entity/Q191040',
    'http://www.wikidata.org/entity/Q191074',
    'http://www.wikidata.org/entity/Q205447',
    'http://www.wikidata.org/entity/Q221820',
    'http://www.wikidata.org/entity/Q244257',
    'http://www.wikidata.org/entity/Q318910',
    'http://www.wikidata.org/entity/Q335160',
    'http://www.wikidata.org/entity/Q381731',
    'http://www.wikidata.org/entity/Q388950',
    'http://www.wikidata.org/entity/Q403830',
    'http://www.wikidata.org/entity/Q431708',
    'http://www.wikidata.org/entity/Q469839',
    'http://www.wikidata.org/entity/Q504053',
    'http://www.wikidata.org/entity/Q521094',
    'http://www.wikidata.org/entity/Q581906',
    'http://www.wikidata.org/entity/Q635632',
    'http://www.wikidata.org/entity/Q649165',
    'http://www.wikidata.org/entity/Q658041',
    'http://www.wikidata.org/entity/Q676513',
    'http://www.wikidata.org/entity/Q770965',
    'http://www.wikidata.org/entity/Q844883',
    'http://www.wikidata.org/entity/Q913324',
    'http://www.wikidata.org/entity/Q1049139',
    'http://www.wikidata.org/entity/Q1119322',
    'http://www.wikidata.org/entity/Q1127709',
    'http://www.wikidata.org/entity/Q1145732',
    'http://www.wikidata.org/entity/Q1263003',
    'http://www.wikidata.org/entity/Q1432710',
    'http://www.wikidata.org/entity/Q1988803',
    'http://www.wikidata.org/entity/Q2359049',
    'http://www.wikidata.org/entity/Q2364033',
    'http://www.wikidata.org/entity/Q2992335',
    'http://www.wikidata.org/entity/Q3023357',
    'http://www.wikidata.org/entity/Q3061599',
    'http://www.wikidata.org/entity/Q4664493',
    'http://www.wikidata.org/entity/Q5164779',
    'http://www.wikidata.org/entity/Q7769248',
    'http://www.wikidata.org/entity/Q12124934',
    'http://www.wikidata.org/entity/Q14786561',
    'http://www.wikidata.org/entity/Q17986183',
    'http://www.wikidata.org/entity/Q19850715',
    'http://www.wikidata.org/entity/Q21463782',
    'http://www.wikidata.org/entity/Q23681360',
    'http://www.wikidata.org/entity/Q23707679',
    'http://www.wikidata.org/entity/Q25394556',
    'http://www.wikidata.org/entity/Q25431158',
    'http://www.wikidata.org/entity/Q38774788',
    'http://www.wikidata.org/entity/Q45082723',
    'http://www.wikidata.org/entity/Q47300912',
    'http://www.wikidata.org/entity/Q99900595',
    'http://www.wikidata.org/entity/Q107040798',
    'http://www.wikidata.org/entity/Q107119206'
  ]
} */