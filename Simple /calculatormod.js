
exports.displays=function(req,res,val){
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>"); 
    res.write("<title>Calculator Web Site</title>"); 
    res.write("</head>");
    res.write("<body>");
    res.write("<p style=\"background-color:orange\" ; style=\"font:14pt bold\";>The result is: ");
          res.write(String(val));
    res.write("</p>");
    res.write(
        "<a href='/'>Another calculation</a>"
      );
    res.write("</body>");
    res.write("</html>");
    return res.end();
};