const DsbUntis = require('dsb-untis')

export default function handler (req,res) {
  if(!req.query.id || !req.query.pw) {res.status(401);res.end(); return}
  const dsbUntis = new DsbUntis(req.query.id, req.query.pw);
  if(!req.query.index){req.query.index = 0}
dsbUntis.fetch().then((data) => { 
    delete data[req.query.index].id;
    delete data[req.query.index].title;
    data[req.query.index].table.shift();
    var newJsonArr = [];
    data[req.query.index].table.forEach(element => {
        var entfall = false;
        if(element[4].startsWith("Entfall") || element[6] == "EVA") {entfall = true;}
        newJsonArr.push({klasse: element[0], stunden: element[1], fach: element[2], lehrer: element[3], entfall: entfall, vertreter: element[5], fach: element[6], raum: element[7], aufgabe: element[9] })
    });
    res.status(200).json(newJsonArr)
    res.end();
});

}