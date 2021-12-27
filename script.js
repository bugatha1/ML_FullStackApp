const classes = {
    1:"food",
    2:"not_food"
    };
    
    const status = document.getElementById('status');
    
    if(status){
      status.innerText = "Loaded tensorflow.js - version" + tf.version.tfjs;
    }
    
    let model;
    
    const loadModel = async () => {
      try{
        const tfliteModel = await tflite.loadTFLiteModel(
          "https://storage.googleapis.com/food_non_food_vision_model/food_not_food_model_v0.tflite"
        );
    
        model = tfliteModel;
    
        if(tfliteModel){
          model_status.innerText = 'model loaded';
        }
      }
      catch(error){
        console.log(error);
      }
    };
    
    loadModel();
    
    function classifyImage(model, image){
      image = tf.image.resizeBilinear(image, [224, 224]);
    
      image = tf.expandDims(image);
      //console.log(image.dType);
    
    
      //console.log(tflite.getDtypeFromTFLiteType("uint8")); 
      // gives int32 as output thus we cast to int32 below line
      image = tf.cast(image, 'int32');
      const output = model.predict(image);
      const output_values = tf.argMax(output.arraySync()[0]);
      
      console.log(output);
      console.log(output_values);
    
      console.log(output.arraySync());
      console.log(output.arraySync()[0]);
    
      //update HTML
    
      //predicted_class.innerText = classes[output_values.argMax().arraySync()];
      //predicted_prob.innerText = output_values.max().arraySync() * 100 + "%";
    }
    
    const fileInput = document.getElementById('file-input');
    const image = document.getElementById('image');
    
    function getImage(){
      if(!fileInput.files[0]) throw new Error('image not found');
      const file = fileInput.files[0];
    
      const reader = new FileReader();
    
      reader.onload = function(event){
    
        // get data URL
        const dataUrl = event.target.result;
    
        // Create image object
        const imageElement = new Image();
        imageElement.src = dataUrl;
    
        // When image object loaded
        imageElement.onload = function() {
          // display image
          image.setAttribute('src', this.src);
    
          // log image parameters
          const currImage = tf.browser.fromPixels(imageElement);
    
          // Classify image
          classifyImage(model, currImage);
    
        };
    
        document.body.classList.add('image-loaded');
      };
    
      reader.readAsDataURL(file);
    }
    
    fileInput.addEventListener('change', getImage);
    
    
    
    