const Authorization=require('./authorization');

exports.routesInit = (app) =>{
    
    app.use('/authorization',Authorization);

    // default endpoint
    app.all('*',(req,res)=>{ 
    console.log("wrong endpoint");
    res.status(400).json({Msg:"wrong endpoint"});
    });

}