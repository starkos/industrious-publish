const { DateTime } = require("luxon");

// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
const formatDate = (dateObj, format, zone) => {
	return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLL yyyy");
};

module.exports = {
	formatDate
}
