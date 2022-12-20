declare module 'zeropad' {
  /**
   * Pads a passed number with leading zeroes. When only one argument is passed,
   * only single digit numbers will have a leading zero added (e.g. 9 -> 09)
   * @param {number} number The number to pad with leading zeros.
   * @param {number=} length The optional length to pad (e.g. a value of 4 will
   *     add 4 leading zeros.)
   * @return {number}
   */
  function zeropad(number: number, length?: number): number;
  export default zeropad;
}
// # sourceMappingURL=index.d.ts.map
