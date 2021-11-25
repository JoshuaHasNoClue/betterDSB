const DsbUntis = require('dsb-untis')

export default function handler (req,res) {
  const dsbUntis = new DsbUntis(req.query.id, req.query.pw);
dsbUntis.fetch().then((data) => { 
    res.status(200).json(data[req.query.index])
});

}