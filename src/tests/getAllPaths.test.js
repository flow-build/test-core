const { getAllPaths } = require('../getAllPaths');
const verySimpleBP = require('../../samples/verySimpleBP');
const simpleBP = require('../../samples/simpleBP');
const mediumBP = require('../../samples/mediumBP');
const averageBP = require('../../samples/averageBP');
const loopSimpleBP = require('../../samples/loopSimpleBP');
const loopMediumBP = require('../../samples/loopMediumBP');
const loopMultipleBP = require('../../samples/loopMultipleBP');

describe('Get All Paths tests with loops', () => {
  test('get all verySimpleBP paths', () => {
    const allPaths = getAllPaths(verySimpleBP);
    expect(allPaths.totalPaths).toEqual(1);
    expect(allPaths.paths).toBeDefined();
  });

  test('get all simpleBP paths', () => {
    const allPaths = getAllPaths(simpleBP);
    expect(allPaths.totalPaths).toEqual(2);
    expect(allPaths.paths).toBeDefined();
  });

  test('get all mediumBP paths', () => {
    const allPaths = getAllPaths(mediumBP);
    expect(allPaths.totalPaths).toEqual(4);
    expect(allPaths.paths).toBeDefined();
  });
  
  test('get all averageBP paths', () => {
    const allPaths = getAllPaths(averageBP);
    expect(allPaths.totalPaths).toEqual(9);
    expect(allPaths.paths).toBeDefined();
  });
  
  test('get all loopSimpleBP paths', () => {
    const allPaths = getAllPaths(loopSimpleBP);
    expect(allPaths.totalPaths).toEqual(8);
    expect(allPaths.paths).toBeDefined();
  });
     
  test('get all loopMediumBP paths', () => {
    const allPaths = getAllPaths(loopMediumBP);
    expect(allPaths.totalPaths).toEqual(8);
    expect(allPaths.paths).toBeDefined();
  });
   
  test('get all loopMultipleBP paths', () => {
    const allPaths = getAllPaths(loopMultipleBP);
    expect(allPaths.totalPaths).toEqual(60);
    expect(allPaths.paths).toBeDefined();
  });
  
});

describe('Get All Paths tests ignoring loops', () => {
  test('get all verySimpleBP paths', () => {
    const allPaths = getAllPaths(verySimpleBP, true);
    expect(allPaths.totalPaths).toEqual(1);
    expect(allPaths.paths).toBeDefined();
  });

  test('get all simpleBP paths', () => {
    const allPaths = getAllPaths(simpleBP, true);
    expect(allPaths.totalPaths).toEqual(2);
    expect(allPaths.paths).toBeDefined();
  });

  test('get all mediumBP paths', () => {
    const allPaths = getAllPaths(mediumBP, true);
    expect(allPaths.totalPaths).toEqual(4);
    expect(allPaths.paths).toBeDefined();
  });
  
  test('get all averageBP paths', () => {
    const allPaths = getAllPaths(averageBP, true);
    expect(allPaths.totalPaths).toEqual(5);
    expect(allPaths.paths).toBeDefined();
  });
  
  test('get all loopSimpleBP paths', () => {
    const allPaths = getAllPaths(loopSimpleBP, true);
    expect(allPaths.totalPaths).toEqual(4);
    expect(allPaths.paths).toBeDefined();
  });
     
  test('get all loopMediumBP paths', () => {
    const allPaths = getAllPaths(loopMediumBP, true);
    expect(allPaths.totalPaths).toEqual(6);
    expect(allPaths.paths).toBeDefined();
  });
   
  test('get all loopMultipleBP paths', () => {
    const allPaths = getAllPaths(loopMultipleBP, true);
    expect(allPaths.totalPaths).toEqual(5);
    expect(allPaths.paths).toBeDefined();
  });
  
});