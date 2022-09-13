// const Converter = require('graphql-to-sparql').Converter;
import { Converter } from 'graphql-to-sparql';
import { toSparql } from 'sparqlalgebrajs';


const algebra = await new Converter().graphqlToSparqlAlgebra('{id... on Film {starring(label: "Brad Pitt")}... on Droid {primaryFunction}}', {
  "@context": {
    "hero": "http://example.org/hero",
    "name": "http://example.org/name",
    "primaryFunction": "http://example.org/primaryFunction",
    "height": "http://example.org/height",
    "Droid": "http://example.org/types/Droid",
    "Human": "http://example.org/types/Human"
}
});

// console.log(algebra);

var output=toSparql(algebra);
console.log(output);