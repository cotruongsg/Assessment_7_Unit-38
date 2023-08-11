const {timeWord}= require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('works for 02:00', () => {
		expect(timeWord('02:00')).toEqual("two o'clock am");
	});
  test("works for 02:35", () => {
    expect(timeWord("02:35")).toEqual("two thirty five am");
   });
});