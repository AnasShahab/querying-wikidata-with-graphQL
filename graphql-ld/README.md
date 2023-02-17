# Using graphql-ld to query Wikidata
## Example:
### We want to find all the cats that have a name, sex, birth date and birth place
##### query.graphql
    {
        id(instance: cat) @single(scope: all) {
            id
            name
            sex
            birthDate
            birthPlace
        }
    }

##### query2.graphql
    query {
        id (instance: chemicalElement) @single(scope: all) {
            id
            chemicalFormula
            boilingPoint
            meltingPoint
            density
            discoverer {
                placeBirth {
                    id
                    country
                }
            }
        }
    }
    
##### context.jsonld
    {
      "@context": {
        "@vocab":"http://www.wikidata.org/entity/",
        "wd": "http://www.wikidata.org/entity/",
        "wdt" :"http://www.wikidata.org/prop/direct/",
        "name": "wdt:P735",
        "cat": "wd:Q146",
        "instance": "wdt:P31",
        "sex": "wdt:P21",
        "birthDate":{"@id":"wdt:P569", "@type":"xsd:dateTime"},
        "birthPlace":"wdt:P19",
        "chemicalElement": "wd:Q11344",
        "chemicalFormula": "wdt:P274",
        "boilingPoint": "wdt:P2102",
        "meltingPoint": "wdt:P2101",
        "density": "wdt:P2054",
        "discoverer": "wdt:P61",
        "placeBirth": "wdt:P19",
        "country": "wdt:P17"
        }
      }
      
#### Run the tool ***graphql-to-sparql*** to see the generated query
```sh
graphql-to-sparql context.jsonld query.qraphql
```
##### The generated SPARQL query
    SELECT ?id ?id_id ?id_sex ?id_birthDate ?id_name ?id_birthPlace WHERE {
      ?id_id <http://www.wikidata.org/prop/direct/P31> <http://www.wikidata.org/entity/Q146>;
        <http://www.wikidata.org/prop/direct/P21> ?id_sex;
        <http://www.wikidata.org/prop/direct/P569> ?id_birthDate;
        <http://www.wikidata.org/prop/direct/P735> ?id_name;
        <http://www.wikidata.org/prop/direct/P19> ?id_birthPlace.
    }
    
```sh
graphql-to-sparql context.jsonld query2.qraphql
```
##### The generated SPARQL query
    SELECT ?id ?chemicalFormula ?boilingPoint ?meltingPoint ?density ?discoverer_id ?discoverer_placeBirth_id ?discoverer_placeBirth_country WHERE {
      ?id <http://www.wikidata.org/prop/direct/P31> <http://www.wikidata.org/entity/Q11344>;
        <http://www.wikidata.org/prop/direct/P274> ?chemicalFormula;
        <http://www.wikidata.org/prop/direct/P2102> ?boilingPoint;
        <http://www.wikidata.org/prop/direct/P2101> ?meltingPoint;
        <http://www.wikidata.org/prop/direct/P2054> ?density;
        <http://www.wikidata.org/prop/direct/P61> ?discoverer_id.
      ?discoverer_id <http://www.wikidata.org/prop/direct/P19> ?discoverer_placeBirth_id.
    ?discoverer_placeBirth_id <http://www.wikidata.org/prop/direct/P17> ?discoverer_placeBirth_country.
    }

#### Run the tool ***graphql-ld-sparqlendpoint*** to query the Wikidata SPARQL endpoint
```sh
graphql-ld-sparqlendpoint context.jsonld query.qraphql https://query.wikidata.org/sparql
```
#### Output query result in JSON format
    [
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q677525",
          "birthPlace": "http://www.wikidata.org/entity/Q30",
          "birthDate": "1950-01-01T00:00:00.000Z",
          "name": "http://www.wikidata.org/entity/Q37564734",
          "sex": "http://www.wikidata.org/entity/Q44148"
        }
      },
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q893453",
          "birthPlace": "http://www.wikidata.org/entity/Q183",
          "birthDate": "1940-01-01T00:00:00.000Z",
          "name": "http://www.wikidata.org/entity/Q1951683",
          "sex": "http://www.wikidata.org/entity/Q44148"
        }
      },
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q14916910",
          "birthPlace": "http://www.wikidata.org/entity/Q55",
          "birthDate": "2011-01-01T00:00:00.000Z",
          "name": "http://www.wikidata.org/entity/Q18048119",
          "sex": "http://www.wikidata.org/entity/Q44148"
        }
      }
    ]

```sh
graphql-ld-sparqlendpoint context.jsonld query2.qraphql https://query.wikidata.org/sparql
```
#### Output query result in JSON format
    [
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q560",        
          "boilingPoint": -268.9,
          "density": 0.1785,
          "meltingPoint": -272.05,
          "chemicalFormula": "He",
          "discoverer": {
            "placeBirth": {
              "id": "http://www.wikidata.org/entity/Q90",     
              "country": "http://www.wikidata.org/entity/Q142"
            }
          }
        }
      },
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q1119",
          "boilingPoint": 8316,
          "density": 13,
          "meltingPoint": 4041,
          "chemicalFormula": "Hf",
          "discoverer": {
            "placeBirth": {
              "id": "http://www.wikidata.org/entity/Q727",
              "country": "http://www.wikidata.org/entity/Q55"
            }
          }
        }
      },
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q1094",
          "boilingPoint": 3767,
          "density": 7.31,
          "meltingPoint": 314,
          "chemicalFormula": "In",
          "discoverer": {
            "placeBirth": {
              "id": "http://www.wikidata.org/entity/Q1731",
              "country": "http://www.wikidata.org/entity/Q183"
            }
          }
        }
      },
      .........
    ]


