var tree = document.querySelector('#treeview');

function createUlfromJson(obj){
  
  var ul = document.createElement('ul');
  if (obj.data == null) return
  if(Object.keys(obj.data).length > 0) obj.dom.appendChild(ul);
  for(var key in obj.data){
    if(typeof(obj.data[key]) != "object"){
      if(!obj.noShow || obj.noShow.indexOf(key) == -1){
        var li = document.createElement('li');
        ul.appendChild(li);
        obj.keys? li.textContent = key + ": " + obj.data[key] : li.textContent = obj.data[key]; 
      }
    } else if (obj.data[key] == null) {} 
    else {

      var newObj = $.extend(true, {}, obj);
      newObj.dom = ul;
      newObj.data = obj.data[key];
      obj.keys? newObj.title = key : newObj.title = null;
      createUlfromJson(newObj);
    }
  }   
}

var basedata = [
  {
    "id": 41,
    "code": "Magazine--Printed"
  },
  {
    "id": 44,
    "code": "Classpak/StudentPak"
  },
  {
    "id": 43,
    "code": "Self-Cover"
  },
  {
    "id": 42,
    "code": "Text Plus-Cover"
  },
  {
    "id": 47,
    "code": "Booklet"
  },
  {
    "id": 48,
    "code": "Custom Kit"
  },
  {
    "id": 52,
    "code": "Digital Article"
  },
  {
    "id": 77,
    "code": "Downloadable Anthem"
  },
  {
    "id": 49,
    "code": "E-Book"
  },
  {
    "id": 68,
    "code": "E-mail Broadcast"
  },
  {
    "id": 50,
    "code": "Electronic Downloadable File"
  },
  {
    "id": 51,
    "code": "Magazine--Digital"
  },
  {
    "id": 188,
    "code": "Streaming Video"
  },
  {
    "id": 79,
    "code": "Subscription"
  },
  {
    "id": 78,
    "code": "Binder or Slipcase"
  },
  {
    "id": 53,
    "code": "Bulletin"
  },
  {
    "id": 56,
    "code": "Certificate"
  },
  {
    "id": 60,
    "code": "Custom Imprint Item"
  },
  {
    "id": 55,
    "code": "Postcard/Bookmark/Bookplate"
  },
  {
    "id": 61,
    "code": "Catalog, Plus-cover"
  },
  {
    "id": 76,
    "code": "Catalog, Self-cover"
  },
  {
    "id": 62,
    "code": "Direct Mail"
  },
  {
    "id": 63,
    "code": "Flyer"
  },
  {
    "id": 67,
    "code": "Order Form"
  },
  {
    "id": 183,
    "code": "Space Ad"
  },
  {
    "id": 98,
    "code": "Miscellaneous - Digital"
  },
  {
    "id": 75,
    "code": "Miscellaneous - Printed"
  },
  {
    "id": 184,
    "code": "Audiocassette"
  },
  {
    "id": 72,
    "code": "CD - Audio"
  },
  {
    "id": 95,
    "code": "CD - ROM"
  },
  {
    "id": 73,
    "code": "DVD - ROM"
  },
  {
    "id": 74,
    "code": "Printed Book with CD/DVD Insert"
  },
  {
    "id": 71,
    "code": "Video"
  },
  {
    "id": 80,
    "code": "Choral Anthem - Inside"
  },
  {
    "id": 99,
    "code": "Adhesive Casebound"
  },
  {
    "id": 100,
    "code": "Cloth over boards"
  },
  {
    "id": 104,
    "code": "Sewn"
  },
  {
    "id": 105,
    "code": "With Printed Dust Jacket"
  },
  {
    "id": 107,
    "code": "Mass market (rack)"
  },
  {
    "id": 137,
    "code": "Saddle-Stitched"
  },
  {
    "id": 110,
    "code": "Tall Rack paperback (US)"
  },
  {
    "id": 111,
    "code": "Trade Paperback"
  },
  {
    "id": 186,
    "code": "Unsewn/Adhesive Bound"
  },
  {
    "id": 122,
    "code": "With flaps"
  },
  {
    "id": 116,
    "code": "Loose-leaf - sheets & binder"
  },
  {
    "id": 121,
    "code": "Concealed wire"
  },
  {
    "id": 120,
    "code": "Wire-O"
  },
  {
    "id": 125,
    "code": "Leather - bonded"
  },
  {
    "id": 124,
    "code": "Leather - imitation"
  },
  {
    "id": 123,
    "code": "Leather - real"
  },
  {
    "id": 130,
    "code": "CD standard audio format"
  },
  {
    "id": 133,
    "code": "Compact Disk - Extra"
  },
  {
    "id": 134,
    "code": "MP3 format"
  },
  {
    "id": 141,
    "code": "Picture Book"
  },
  {
    "id": 151,
    "code": "Day by Day calendar"
  },
  {
    "id": 150,
    "code": "Engagement calendar"
  },
  {
    "id": 171,
    "code": "Adobe PDF"
  },
  {
    "id": 178,
    "code": "Amazon Kindle"
  },
  {
    "id": 179,
    "code": "ePub"
  },
  {
    "id": 185,
    "code": "eReader (Palm)"
  },
  {
    "id": 170,
    "code": "Microsoft Reader (LIT)"
  },
  {
    "id": 156,
    "code": "Cloth"
  },
  {
    "id": 158,
    "code": "NTSC  (used in US and Japan)"
  },
  {
    "id": 167,
    "code": "MPEG-4"
  },
  {
    "id": 180,
    "code": "VBS T-Shirt"
  },
  {
    "id": 181,
    "code": "Mac"
  },
  {
    "id": 182,
    "code": "Windows"
  }
]

var obj = {
  dom: tree,
  data: basedata,
  noShow: ["id"],
  check: true
}

createUlfromJson(obj);
