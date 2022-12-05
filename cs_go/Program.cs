        int y = 0;
        for(double x=-100;x<100;x=x+0.1){
            double a = 2*x*x*x - 3 ;
            double s = x*x+1;
            double d = Math.Floor(a/s);
        
            if(d>9||d<11){
              Console.WriteLine(d);
            }
        }
