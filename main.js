function testNoUselessCatch() {
  try {
    const number = 3 + 3;

    return add(number);

  } catch (error) {
    handleError(error); // comment out this line to test 'no-useless-catch'
    throw error;
  }
}

function add(number) {
  return number + 6;
}

function handleError(error) {
  return error;
}

testNoUselessCatch();

// ----------------------------------

function testNoWith(/* point */) {
  // Uncomment to test 'no-with'
  // const x = 2;
  // const y = 3;

  // with (point) {
  //   const r = Math.sqrt((x * x) + (y * y));
  //   return r;
  // }
}

testNoWith(1);

// ----------------------------------

function testNoShadowRestrictedNames() {
  // const undefined = 5; // Uncomment to test 'no-shadow-restricted-names'

  return undefined;
}

testNoShadowRestrictedNames();

// ----------------------------------

// let result = 0; // Uncomment to test 'require-atomic-updates'

async function testRequireAtomicUpdates() {
  const result1 = 0;
  const result2 = 0;
  const result3 = 0;
  const result4 = 0;
  let results = null;

  // Uncomment to test 'require-atomic-updates'
  // result += await add(result);
  // result += result + await add(result);
  // result = await add(result) + await add(result);

  const temp = await add(result1) + result2;
  const temp2 = await add(result3) + await add(result4 * 2);

  results = temp + temp2;

  return results;
  // return result; // Uncomment to test 'require-atomic-updates'
}

testRequireAtomicUpdates();

// ----------------------------------

function testNoPrototypeBuiltins() {
  const testObj = {};
  // const hasTestProperty = testObj.hasOwnProperty('test'); // Uncomment to test 'no-prototype-builtins'
  const hasTestProperty = Object.prototype.hasOwnProperty.call(testObj, 'test'); // Comment out to test 'no-prototype-builtins'

  return hasTestProperty;
}

testNoPrototypeBuiltins();

// ----------------------------------

function testNoAsyncPromiseExecutor() {
  const foo = 6;

  // Uncomment to test 'no-async-promise-executor'
  // const result = new Promise(async (resolve, reject) => {
  //   if (reject) {
  //     handleError(reject);
  //   }

  //   resolve(await foo);
  // });

  // Comment out to test 'no-async-promise-executor'
  const result = Promise.resolve(foo);

  return result;
}

testNoAsyncPromiseExecutor();

// ----------------------------------

function testNoMisleadingCharacterClass() {
  // const bad = /^[👍]$/; // Uncomment to test 'no-misleading-character-class'
  const good = /^[👍]$/u; // Comment to test 'no-misleading-character-class'

  // return bad; // Uncomment to test 'no-misleading-character-class'
  return good; // Comment to test 'no-misleading-character-class'
}

testNoMisleadingCharacterClass();

// ----------------------------------

function testNoConfusingArrow() {
  const one = 1;
  const x = a => one ? a : 3; // Will trigger if 'no-confusing-arrow' is enabled

  x();
}

testNoConfusingArrow();

// ----------------------------------

function testCommaDangle() {
  const obj = {
    prop1: 1,
    prop2: 2,
    prop3: 3, // Remove comma to test 'comma-dangle'
  };

  return obj;
}

testCommaDangle();

// ----------------------------------

function testNoRedeclare() {
  const a = 3; // Change 'const' to 'var' to test 'no-redeclare'
  // let a = 10; // Uncomment, change 'let' to var, comment out 'no-var' rule to test 'no-redeclare'

  return a;
}

testNoRedeclare();
