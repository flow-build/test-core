const cytoscape = require('cytoscape');
const cytoscapeAllPaths = require('cytoscape-all-paths');
const _ = require('lodash');
cytoscape.use(cytoscapeAllPaths);

function getLoops(blueprint) {
  const { nodes } = blueprint.blueprint_spec;
  const cy = cytoscape();
  let count = 0;
  nodes.forEach((node) => cy.add({ data: { id: node.id, type: node.type } }));
  nodes.forEach((node) => {
    if (node.next && typeof node.next != 'object') {
      count++;
      cy.add({
        data: {
          id: count,
          source: node.id,
          target: node.next
        }
      })
    } else if (node.next) {
      for (const path of _.uniq(Object.values(node.next))) {
        count++;
        cy.add({
          data: {
            id: count,
            source: node.id,
            target: path
          }
        })
      }
    }
  });

  const eles = cy.elements();
  const allPaths = eles.cytoscapeAllPaths();
  let paths = allPaths.map((path) => path.filter((node) => node.isNode()));
  let repeatedPaths = [];

  paths.forEach((path) => {
    if (path?.at(-1)?._private?.data?.type?.toLowerCase() !== 'finish') {
      repeatedPaths.push(path);
    }
  });

  const repeatedPathsIds = repeatedPaths.map(path => path.map(node => node.id()));
  const loops = repeatedPathsIds.map((loop) => `${loop.at(-2)} -> ${loop.at(-1)}`);
  const uniqueLoops = _.uniqWith(loops, _.isEqual);

  return {
    totalLoops: uniqueLoops.length,
    loops: uniqueLoops
  }
}

module.exports = {
  getLoops
}