import {Client} from "graphql-ld";
import {QueryEngineSparqlEndpoint} from "graphql-ld-sparqlendpoint";

// Define a JSON-LD context
const context = {
  "@context": {
    "instance": "http://www.wikidata.org/prop/direct/P31",
    "film": { "@id": "http://www.wikidata.org/entity/Q11424" },
    "title": "http://www.wikidata.org/prop/direct/P1476",
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
    title
    starring (label: "Brad Pitt")
    }
}`;

// Execute the query
const { data } = await client.query({ query });
console.log(data)


// output
/* {
  id: {
    starring: [ 'http://www.wikidata.org/entity/Q35332' ],
    name: [
      'Cool World',
      'World War Z',
      'Killing Them Softly',
      'Inglourious Basterds',
      'The Dark Side of the Sun',
      'Dallas',
      '12 Monkeys',
      'Kalifornia',
      'The Curious Case of Benjamin Button',
      'Troy',
      'Fight Club',
      'Seven',
      'Mr. & Mrs. Smith',
      'Babel',
      "Ocean's Eleven",
      'Moneyball',
      'The Tree of Life',
      'Interview with the Vampire: The Vampire Chronicles',
      'Snatch',
      'Burn After Reading',
      'The Assassination of Jesse James by the Coward Robert Ford',
      'Less Than Zero',
      "No Man's Land",
      'The Mexican',
      "Ocean's Twelve",
      "The Devil's Own",
      'A River Runs Through It',
      "Ocean's Thirteen",
      'Being John Malkovich',
      'Thelma & Louise',
      'Meet Joe Black',
      'Confessions of a Dangerous Mind',
      'Seven Years in Tibet',
      'Legends of the Fall',
      'Too Young to Die?',
      'Spy Game',
      'Exit Through the Gift Shop',
      'True Romance',
      'Sleepers',
      'The Favor',
      'Full Frontal',
      'A Stoning in Fulham County',
      'Happy Together',
      'Johnny Suede',
      'Cutting Class',
      'Across the Tracks',
      '12 Years a Slave',
      'The Counselor',
      'Two-Fisted Tales',
      'Abby Singer',
      'Contact',
      "If God Is Willing and Da Creek Don't Rise",
      'The One with the Rumor',
      'The Tiger',
      'Hunk',
      'Fury',
      'By the Sea',
      'The Big Short',
      'The Audition',
      'War Machine',
      'Allied',
      'Voyage of Time',
      'Deadpool 2',
      'Ad Astra',
      'Bad Boy Kummer',
      'Once Upon a Time in Hollywood',
      'Bullet Train',
      'The Lost City',
      'Babylon',
      'Dr. Anthony Fauci Cold Open'
    ]
  }
} */
