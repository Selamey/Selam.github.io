const express = require('express');
const path = require('path');
const calculatormod = require('./calculatormod');
const operations = {
    "add" : function(f,s) {return f + s},
    "subtract" : function(f,s) {return f - s},
    "multiply" : function(f,s) {return f * s},
    "division" : function(f,s) {if(s == 0) return 0; return f/s},
}

const app = express();
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    console.log('/');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/calc', (req, res) => {
    const body = req.body;
    const first = parseInt(body.first); 
    const second = parseInt(body.second); 
    const operation = body.operation;
    const result = operations[operation](first,second);
    console.log(result);
    res.send(calculatormod.displays(req, res, result));
});


app.listen(8080, ()=>{
    console.log('port is ready');
})

// http.createServer(function (req, res) { 
//     const q = url.parse(req.url, true);
//     const qdata=q.query;
//     const filename = "." + q.pathname;
//     if (q.pathname=="/cal.js")
//     {
//         if(qdata.operation=='add'){
//             calculatormod.add(req,res,q.query)
//             calculatormod.displays(req,res,q.query)
//         }
//         else if(qdata.operation=='subtract'){
//             calculatormod.subtract(req,res,q.query)
//             calculatormod.displays(req,res,q.query)
//         }

//         else if(qdata.operation=='multiply'){
//             calculatormod.multiply(req,res,q.query)
//             calculatormod.displays(req,res,q.query)
//         }

//         else if(qdata.operation=='division'){
//             calculatormod.division(req,res,q.query)
//             calculatormod.displays(req,res,q.query)
//         }
//     }
    
//     else{
//         fs.readFile(filename, function(err, data) { 
//             if (err) {
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 return res.end("404 Not Found");
//             }
//             res.writeHead(200,{'Content-Type': 'text/css'}); // Content-Type not included 
//             res.write(data);
//             return res.end();
//         });
//     }
    
// }).listen(8080);