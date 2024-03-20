const { MarkovMachine } = require("./markov");



describe("tests markov chains", function () {

  test("tests null", function () {
    const testInstance = new MarkovMachine("The");
    let chain = testInstance.getChains();
    expect(chain).toEqual({ The: [null] });
  });

  test("test simple text", function () {
    const testInstance1 = new MarkovMachine('The cat in the had with cat hat');
    let chain = testInstance1.getChains();
    expect(chain).toEqual(
      {
        The: ['cat'], cat: ['in', 'hat'], the: ['had'], in: ['the'], had: ['with'],
        with: ['cat'], hat: [null]
      });
  });

  test("test multiple of same word", function () {
    const testInstance2 = new MarkovMachine('the cat the hat');
    let chain = testInstance2.getChains();
    expect(chain['the']).toContain('cat');
  });

});