import Ember from 'ember';

export default Ember.Component.extend({
  //tagName: 'canvas',
  width: 300,
  height: 300,
  //attributeBindings: ['width','height'],

  didInsertElement: function() {
    this._super(...arguments);
    //var ctx = this.get('element').getContext('2d');
    //ctx.fillStyle = "#000";
    //ctx.fillRect(0, 0, this.get('width'), this.get('height'));
    var canvas = this.$('canvas')[0];
    this.set('ctx', canvas.getContext('2d'));
    this.draw();
  },

  draw: function() {
    var img = new Image();
    var ctx = this.get('ctx');
    img.src = 'assets/images/rhino.png';
    img.style.display = 'none';
    img.onload = function(){
      ctx.drawImage(img, 0, 0);
    };
  },

  _empty: function() {
    var ctx = this.get('ctx');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, this.get('width'), this.get('height'));
  },

  _invert: function() {
    var ctx = this.get('ctx');
    var imageData = ctx.getImageData(0,0,this.get('width'), this.get('height'));
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  },

  _grayscale: function() {
    var ctx = this.get('ctx');
    var imageData = ctx.getImageData(0,0,this.get('width'), this.get('height'));
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  },

  actions: {
    invert() {
      this._invert();
    }
  }
});
