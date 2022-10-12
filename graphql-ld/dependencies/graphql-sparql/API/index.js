// const Converter = require('graphql-to-sparql').Converter;
import { Converter } from 'graphql-to-sparql';
import { toSparql } from 'sparqlalgebrajs';


// const algebra = await new Converter().graphqlToSparqlAlgebra('{id... on film {starring(label: "Brad Pitt")}}', {
//   "@context": {
//     "film": "http://example.org/film",
//     "hero": "http://example.org/hero",
//     "name": "http://example.org/name",
//     "primaryFunction": "http://example.org/primaryFunction",
//     "height": "http://example.org/height",
//     "Droid": "http://example.org/types/Droid",
//     "Human": "http://example.org/types/Human",
//     "label": { "@id": "http://www.w3.org/2000/01/rdf-schema#label", "@language": "en"},
//     "starring": "http://www.wikidata.org/prop/direct/P161"
// }
// });
// "@base":"http://example.com/base/",
const algebra = await new Converter().graphqlToSparqlAlgebra('{id (instance: Droid) {hero name}}', {
  "@context": {
    
    
    "@vocab": "http://example.com/vocab/",
    "wd": "http://www.wikidata.org/entity/",
    "wdt" :"http://www.wikidata.org/prop/direct/",
    "film": "http://example.org/film",
    
    "name": "wdt:name",
    "primaryFunction": "http://example.org/primaryFunction",
    "height": "http://example.org/height",
    
    "Human": "http://example.org/types/Human",
    "label": { "@id": "http://www.w3.org/2000/01/rdf-schema#label", "@language": "en"},
    "starring": "http://www.wikidata.org/prop/direct/P161",
    "instance": { "@id":"http://www.wikidata.org/prop/direct/P31"},
}
});

console.log(algebra)
// console.log(algebra.input.input[1].patterns)
// console.log(typeof(algebra))

var output=toSparql(algebra);
console.log(output);