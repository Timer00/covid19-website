
	var arr = [1, 2, 3, 4, 5, 26, 77];
	
//mean
		function myMean(array) {
            
            var n = array.length;
            var sum = 0;
            var i = 0;
            
            for (i = 0; i < n; i++) {
                sum += array[i]; }
                
            var mean = sum /(n + 1);
            return mean;
        }
		
//max value
	
            function myMax(array) {

            var max = arr[0];
        
            for(i = 0; i < n; i++){
                if (arr[i] >= max) {
                max = arr[i];
                }
            }
            return mean;
        }
        
//min value
        
        function myMin(array){

        var min = arr[0];
        
        for (i = 0; i < n; i++) {
            if (arr[i] <= min) {
                min = arr[i];
            }
        }
        return(min);
        }
        
//range value
        
        function myRange(array){

        var range = max - min;
        
        return(range);
        }
        
//variance
        function variance()
        var sqDiff = 0;
        var variance = 0;
        
        for (var i = 0; i < arr.length; i++)
          sqDiff += (arr[i] - mean) * (arr[i] - mean)

        variance = sqDiff / arr.length

        console.log(variance);
        document.write(variance);

// accumulated value


        
// median value

    var median = 0;

    arr.sort();

    if(x.length % 2 != 0) {
	    	   
	    	   median = x[x.length + 1 / 2]; 
	    	   
	    	  return median;
	    	  
	       }else { 
	    	   
	    	   median = (x[x.length / 2] + x[x.length / 2 + 1]);
	    	   
	    	   return median;  	 	       	        	
	        }
	 }
    


// standard deviation

    var deviation = 0;
    
    deviation = variance * variance;

    console.log(deviation);
    document.write(deviation);
