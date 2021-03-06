import moment from "moment";

/**
 * @class
 * @classdesc Class to handle unix time
 * @author Marco Tribuzio
 */
class Time {

  /**
   * Trasform a unix Timestamp in seconds to a date like "July 18, 2020"
   * @param {Number} unixTimeStamp - unix time stamp to transform
   * @returns {string}
   */
  static getTimeByUnixTimestamp (unixTimeStamp) {
    return moment(unixTimeStamp * 1000).format('LL')
  }

  static getUnixTimestamp () {
    return moment().unix()
  }

}

export default Time