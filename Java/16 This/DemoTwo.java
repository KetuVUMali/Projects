//package 16 This;

public class DemoTwo {
     //instance variables
            int a=100;
            int b=20;
            
            void add(int a,int b)//local variables
            { 
                System.out.println(a+b);//local variables addition
                System.out.println(this.a+this.b);//instance variables addition
            }
            public static void main(String[] args)//static method
            {   
                DemoTwo t = new DemoTwo();
                t.add(10,20);
            }
        

}
