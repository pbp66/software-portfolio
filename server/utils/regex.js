/**
 * Regex Explained:
 *
 * [a-zA-Z0-9._%+-]+ - one or more of any alpha numeric characters and any of these symbols (. _ % + -) are present before the @ sign.
 * @ - the @ sign must be present in the expression
 * [a-zA-Z0-9.-]+ - after the @ sign, a valid domain must be present composed of one or more alpha numeric characters, a period, or a dash
 * \. - after the subdomains, a period must be present to separate the sub-domains from the top-level domain
 * [a-zA-Z]{2,} -  the top-level domain can only contain 2 or more alpha characters (lowercase and uppercase alphabet characters)
 */

export const email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

/**
 * Must trim whitespace before submitting
 *
 * RegEx Explained:
 *
 * ^, $ - characters are used to mark the beginning and end of the regex. Without these, a 100 digit number would satisfy the regex.
 * \(? - 0 or 1 left parenthesis characters are allowed
 * [\d]{3} - exactly 3 digits are required following a left parenthesis or the start of the expression
 * \)? - 0 or 1 right parenthesis characters are allowed
 * [\s.-]? - a space, period, or dash are allowed if present in the expression (following the area code)
 * [\d]{3} - another 3 digits must be present after matching the previous characters
 * [\s.-]? - allow a space, period, or dash if present (0 or 1 allowed) between the middle 3 digits and last 4 digits of a phone number
 * [\d]{4} - last 4 characters of the expression must be digits
 *
 * Valid Phone Numbers Formats:
 * ###-###-####
 * (###) ###-####
 * ### ### ####
 * (###) ### ####
 * ###.###.####
 * ###########
 * ### #######
 */
export const phoneNumber = /^\(?[\d]{3}\)?[\s.-]?[\d]{3}[\s.-]?[\d]{4}$/;
