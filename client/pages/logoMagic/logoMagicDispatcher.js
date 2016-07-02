import model from 'pages/logoMagic/logoMagicModel';

var dispatcher = {
  formatImage: function(heightA, widthA, heightB, widthB){
    if ( widthA > heightA ){
      if ( widthA > widthB ) {
      // resize A width, align vertically
      } else {
      // resize B width, align vertically
      }
    } else if ( heightA > heightB ) {
      // Resize A height, align horizontally
    } else {
      // Reize B height, align horizontally
    }
    // Made do a case statement here instead
  },
  editImageName: function(id, title, newTitle, event){
    var isEnter = event.which === 13;
    var isString = typeof newTitle === 'string';
    var notEmpty = newTitle.length > 0;
    var isEscape = event.which === 27;

    if (isEnter && isString && notEmpty
    ) {
      model.editTitle(id, newTitle);
    } else if (isEscape) {
      model.ignoreEdit(id);
    }
  }
};

module.exports = dispatcher;
