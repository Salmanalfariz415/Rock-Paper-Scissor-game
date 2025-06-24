let express=require('express');
let app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/start.html');
});

app.use(express.static('public'));

app.get('/redirect',(req,res)=>{
    res.redirect('/index.html');
})
app.listen(3008,()=>{
    console.log('Server is running on http://localhost:3008');
})