const { getLoops } = require('../getLoops');
const verySimpleBP = require('../../samples/verySimpleBP');
const simpleBP = require('../../samples/simpleBP');
const mediumBP = require('../../samples/mediumBP');
const averageBP = require('../../samples/averageBP');
const loopSimpleBP = require('../../samples/loopSimpleBP');
const loopMediumBP = require('../../samples/loopMediumBP');
const loopMultipleBP = require('../../samples/loopMultipleBP');

describe('Get Loops tests', () => {
  test('get verySimpleBP loops', () => {
    const allLoops = getLoops(verySimpleBP);
    expect(allLoops.totalLoops).toEqual(0);
    expect(allLoops.loops).toBeDefined();
  });

  test('get simpleBP loops', () => {
    const allLoops = getLoops(simpleBP);
    expect(allLoops.totalLoops).toEqual(0);
    expect(allLoops.loops).toBeDefined();
  });

  test('get mediumBP loops', () => {
    const allLoops = getLoops(mediumBP);
    expect(allLoops.totalLoops).toEqual(0);
    expect(allLoops.loops).toBeDefined();
  });
  
  test('get averageBP loops', () => {
    const allLoops = getLoops(averageBP);
    expect(allLoops.totalLoops).toEqual(1);
    expect(allLoops.loops[0]).toEqual('WAIT -> GET-STATUS');
  });
  
  test('get loopSimpleBP loops', () => {
    const allLoops = getLoops(loopSimpleBP);
    expect(allLoops.totalLoops).toEqual(1);
    expect(allLoops.loops[0]).toEqual('CHECK-USER-ACTION -> USER-VIEW');
  });
     
  test('get loopMediumBP loops', () => {
    const allLoops = getLoops(loopMediumBP);
    expect(allLoops.totalLoops).toEqual(1);
    expect(allLoops.loops[0]).toEqual('TERMS-CONDITIONS-STATUS -> SHOW-TERMS-ACCEPTANCE-MODAL');
  });
   
  test('get loopMultipleBP loops', () => {
    const allLoops = getLoops(loopMultipleBP);
    expect(allLoops.totalLoops).toEqual(11);
    expect(allLoops.loops[0]).toEqual('TIMER -> GET-LAST-APPROVAL');
    expect(allLoops.loops[1]).toEqual('CHECK-LOAN-VALUE-ACTION -> DATES-OPTIONS');
  });
  
});
