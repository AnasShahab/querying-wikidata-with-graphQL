# pip install sparqlwrapper
# https://rdflib.github.io/sparqlwrapper/
import sys
from SPARQLWrapper import SPARQLWrapper, JSON
import json

endpoint_url = "https://query.wikidata.org/sparql"

query = """SELECT ?labels ?items
WHERE {
  ?items wdt:P31 wd:Q6256.
  ?items rdfs:label ?labels FILTER(lang(?labels)="en")
}"""


def get_results(endpoint_url, query):
    user_agent = "WDQS-example Python/%s.%s" % (sys.version_info[0], sys.version_info[1])
    # TODO adjust user agent; see https://w.wiki/CX6
    sparql = SPARQLWrapper(endpoint_url, agent=user_agent)
    sparql.setQuery(query)
    sparql.setReturnFormat(JSON)
    return sparql.query().convert()

#results is a dictionary
results = get_results(endpoint_url, query)

my_dict={}

for result in results["results"]["bindings"]:
    print(result['labels']['value'], end=" ")
    my_key=result['labels']['value']
    print(result['items']['value'], end='\n')
    my_value=result['items']['value']
    my_dict[my_key]=my_value

with open('output_item_parse.json', 'w', encoding='utf-8') as f2:
    json.dump(my_dict, f2, ensure_ascii=False, indent=4)