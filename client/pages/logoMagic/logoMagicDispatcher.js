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
  },
  editImagename: function(id, newTitle, event){
    if (event.which === 13
      && typeof newTitle === 'string'
      && newTitle.length > 0 
    ) {
      model.editTitle(id, newTitle);
    } else if (
      event.which === 27
    ) {
      model.ignoreEdit(id);
    }
  }
};

module.exports = dispatcher;