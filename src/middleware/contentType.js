import { ErrorMessage } from "../lib/messages"

/** Just allow application/json accepts
 * @param req
 * @param res
 * @param next
 */
export default (req, _res, next) => {
	if (req.accepts("application/json")) {
		return next()
	}
	return next(new ErrorMessage("Content Type not supported", "server just supports \"application/json\" content type", 400))
}