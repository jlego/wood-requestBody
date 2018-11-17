/**
 * Wood Plugin Module.
 * 格式化输出结果中间件
 * by jlego on 2018-11-17
 */

module.exports = app => {
  let requestbody = function(req, res, next){
    if (req.method == 'PUT') {
      if (req.body) {
        if (!req.body.cmd) {
          res.print(app.error_code.error_body_cmd);
          return;
        } else if (!req.body.data) {
          res.print(app.error_code.error_body_data);
          return;
        }
      } else {
        res.print(app.error_code.error_body);
        return;
      }
    }
    next();
  };
  app.application.use(requestbody);
  return requestbody;
}
