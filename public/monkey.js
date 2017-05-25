var  veritas = [];
var responsum = [];
temere = 34;
litterae = ['A','b','c','d','e','f'];
function myFunc(spreadsheetdata) {
  // do something with spreadsheet data here
  sData = spreadsheetdata;
  columnCount = sData.feed.link.length;
  epistula = sData.feed.entry;
  numOfQs = Math.ceil(sData.feed.entry.length/columnCount) - 1;
  start = 0;
  Question = 1;
  while(start < sData.feed.entry.length){
      if(Question == 1){

      }else{
          responsum.push(epistula[start+columnCount-1].content.$t);
          veritas.push(0);
          quas = epistula[start].content.$t;
          resp = epistula.slice(start+1, start + columnCount -1);
          opti = template.optionem(resp, Question);
          qes = template.quaestio(quas);
          html = template.osseus(qes, opti, Question);
          template.insertHTML(html)
          //getTrivia(Question);
      }
    start += columnCount;
    Question++;
  }
}
function getTrivia(id){
    temere = Math.ceil(Math.random() * (700 - 20) + 20);
    trivia = $.get('http://numbersapi.com/'+temere+'/trivia?notfound=floor&fragment', function(data) {
        document.getElementById('q'+id).innerHTML = '<span class="headline">Hey! some Quick fact here about '+temere+'</span><div class="about">'+trivia.responseText+'</div>';
});
}

var template ={
    optionem:function(obj, id){
        initium = 0;
        str ="";
        while(initium < obj.length){
            opt = obj[initium].content.$t;
            str = str + '<a href="javascript:void(0)" class="list-group-item" id="o'+id+'pt'+initium+'" title = "'+initium+'"  name="'+id+'" onclick="mark(this)">'+opt+'</a>';
             initium++;
        }
        return str;
    },
    quaestio:function(text){
        return '<div>'+text+'</div>';
    },
    osseus:function(Quas, opts, id){
        t = ' <div class="row question-item">\
      <div class="col-sm-9 question" style="background:#fff"><div class="well">\
        '+Quas+'</div><div class="options">\
          <div class="list-group">\
            '+opts+'\
          </div>\
        </div>\
      </div>\
      <div class="col-sm-3 trivia" align="right" id="q'+id+'"></div></div> \ ' ;
      return t;
    },
    insertHTML:function(el){
        document.getElementById('recep').innerHTML = document.getElementById('recep').innerHTML + el;
    }
}
function mark(obj){
    name = obj.name;
    var x = document.getElementsByName(name);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].className = 'list-group-item';
    } 
    obj.className += ' active';
    veritas[parseInt(obj.name-2)] = (String.fromCharCode(65 + parseInt(obj.title)) === responsum[parseInt(obj.name-2)]);
}
function submit(){
    var sum = veritas.reduce(
  function(total, num){ return total + num }
  , 0);
  name = prompt("OI! You care to tell us your name?", "Albert Einstein");
  if(name == null || name == ''){
	  alert("we cannot save you as anon. we are sorry");
  }else{
	 $('#name').val(name);
	 $('#score').val(sum);
	 $('#foo').submit();
  }
}