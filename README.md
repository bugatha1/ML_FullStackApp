# ML_FullStackApp
Machine learning powered app to decide whether a photo is food or not food



   **Full Stack ML application**
   
      1.  Collect dataset
      2.  Model dataset
      3.  Build Applcation
      4.  Deploy Application
      
      
   **Collect dataset**
      
      - Need images of food or not food
      
          -   For images of not food : download random images from imageNet
          -   For images of food : random subset of images from food101 & from ImageNet( photos that are food)
     
   **Model dataset**
   
      -  Build a computer vision model to classify food and not food
      
   **Build Application**
   
      -  Simple html with javascript
      
   **Deploy model**
   
       we have few options here
       
        - Gradio
        - Tensorflow.js
        - API
        
   **Log**
   
      .   downloaded imagenet class list from GitHub(want to get non-food classes from ImageNet)
      
          -   https://gist.github.com/yrevar/942d3a0ac09ec9e5eb3a
          
      .   downloaded and installed nltk (to try and get a list of words associated with food) -- got a list of foods
          
            -   we have a list of foods,  now to filter the imagenet dataset classes and remove any class that contains a food ( so we can download images
                  of non food from imagenet)
                  
      .    got list of food classes and non food classes from ImageNet
      
      .    Now to figure out how to download food and non_food images from ImageNet(random samples )
          
            - And can also create food images from Food101( random classes of imges from different classes)
       
      .   Updated list of ImageNet food and non-food items to include ImageNet keys from :
          https://github.com/mf1024/ImageNet-Datasets-Downloader (ImageNet dataset downloader)
            
              -   The data downloader uses only uses Flickr URLs ( less than total ImageNet images ) because ImageNet
                  images are downloaded with different URLs, however Flickr images are most reliable - 
                  https://towardsdatascience.com/how-to-scrape-the-imagenet-f309e02de1f4
                  
      .  Execute the below command to download images with:
                    
            python3 ./downloader.py -data_root ../test_images  -number_of_classes 5 \ -images_per_class 10
          
            Started downloding images from ImageNet going to filter these on backend into food_images and non_food_images
            
                - downloading 50 random images from 1000 random classes
                - Then :  filter 1000 random classes and images into food/nonfood
                - command used:
                  
                    !python downloader.py \
                    -data_root ..data/imagenet_images/ \
                    -number_of_classes 1000 \
                    -images_per_class 50
      
      
