import {
  getCompleteUTCTime,
  prependZerosForTime,
  get24HrFormattedString,
} from '../timeUtils';

describe('Testing getCompleteTime: ', () => {
  const epoch = 0; //Thu Jan 01 1970 00:00:00 (UTC)
  const beforeEpoch = -10000000; //Wed Dec 31 1969 21:13:20 GMT+0100
  const afterEpoch = 10000000; //Thu Jan 01 1970 02:46:40
  it('Should be able to convert 0 or a positive integer to a CompleteTime object', () => {
    expect(getCompleteUTCTime(epoch)).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    expect(getCompleteUTCTime(afterEpoch)).toEqual({
      hours: 2,
      minutes: 46,
      seconds: 40,
    });
  });
  it('Should be able to convert a negative integer to a ComplteTime object', () => {
    expect(getCompleteUTCTime(beforeEpoch)).toEqual({
      hours: 21,
      minutes: 13,
      seconds: 20,
    });
  });
  it('Should be able to ignore any decimals and convert to a ComplteTime object', () => {
    expect(getCompleteUTCTime(afterEpoch + 0.3)).toEqual({
      hours: 2,
      minutes: 46,
      seconds: 40,
    });
  });
});

describe('Testing prependZerosForTime: ', () => {
  it('Should handle negative numbers', () => {
    expect(prependZerosForTime(-1)).toBe('01');
    expect(prependZerosForTime(-11)).toBe('11');
  });
  it('Should round any decimal numbers to the next integer', () => {
    expect(prependZerosForTime(0.1)).toBe('00');
    expect(prependZerosForTime(0.5)).toBe('01');
    expect(prependZerosForTime(0.9)).toBe('01');
  });
  it('Should prepend a 0 if the number is less than ten', () => {
    expect(prependZerosForTime(9.4)).toBe('09');
    expect(prependZerosForTime(9.4)).toBe('09');
    expect(prependZerosForTime(9)).toBe('09');
    expect(prependZerosForTime(-9.4)).toBe('09');
  });
  it('Should return the same number for any number greater than 10', () => {
    expect(prependZerosForTime(10)).toBe('10');
    expect(prependZerosForTime(-10)).toBe('10');
    expect(prependZerosForTime(9.5)).toBe('10');
    expect(prependZerosForTime(9.5)).toBe('10');
    expect(prependZerosForTime(100)).toBe('100');
  });
});

describe('Testing get24HrFormattedString: ', () => {
  const completeTime = {
    hours: 21,
    minutes: 13,
    seconds: 20,
  };
  it('Should return a 24 hour formatted string with seconds', () => {
    expect(
      get24HrFormattedString({ ...completeTime, displaySeconds: true })
    ).toBe('21:13:20');
  });
  it('Should return a 24 hour formatted string without seconds', () => {
    expect(get24HrFormattedString(completeTime)).toBe('21:13');
  });
});
