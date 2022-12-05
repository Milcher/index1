void lol1(){
          int y = 0;
        for(double x=-100;x<100;x=x+0.1){
            double a = 2*x*x*x - 3 ;
            double s = x*x+1;
            double d = Math.Floor(a/s);
        
            if(d>9||d<11){
              Console.WriteLine(d);
            }
        }

}



//LOL 2
void lol2(){
 double min=0;
        
        Stack<double> s = new Stack<double>();
        
        
        for(double x=-100;x<100;x=x+0.1){
            double y=x*x - 3*x +15;
            s.Push(y);
            if (y<min){
                min=y;
            }
            
            
        }
        Console.WriteLine(min);
        
        
        Stack<double> arr=new Stack<double>();
        
        for(double x=-100;x<100;x=x+0.1){
            double a = x*x -15;
            double s2= Math.Log(x*x+3*x-7);
            double d = a / s2;
            if(d==0){
                arr.Push(d);
            }
        }
        Console.WriteLine(string.Join(',',arr));
}
lol1();
lol2();