const DsbUntis = require('dsb-untis')

export default function handler (req,res) {
  if(!req.query.id || !req.query.pw) {res.status(401);res.end(); return}
  const dsbUntis = new DsbUntis(req.query.id, req.query.pw);
  if(!req.query.index){req.query.index = 0}
dsbUntis.fetch().then((data) => { 
    res.status(200).json(data[req.query.index])
    res.end();
});

}