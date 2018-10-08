/**
 * @Object holidays is a set of lists containing the details of holidays.
 * @property {array}  holidays.simple - List of simple date-based holidays--no leading zeroes. Empty if none.
 * @property {array}  holidays.forward - List of holidays that are `n` from beginning of the month (month/num/day). Empty if none.
 * @property {array}  holidays.backward - List of holidays that are `n` from end of the month (month/num/day). Empty if none.
 */
module.exports = {
  simple: [
    '1/1',
    '4/25',
    '5/1',
    '6/10',
    '6/24',
    '8/15',
    '10/5',
    '11/1',
    '12/1',
    '12/8',
    '12/25'
  ],
  forward: [
  ],
  backward: [
  ]
}
