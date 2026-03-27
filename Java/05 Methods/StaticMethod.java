
public class StaticMethod {
        static int x = 20;
        int y =30;
        
        static void m1()
        {
            int a = 10;
            System.out.println(a);  // Acces Local Var
            System.out.println(x);  // Access Static Var
            System.out.println(StaticMethod.x); // Access Static Var

            StaticMethod s1 = new StaticMethod();
            System.out.println(s1.y);  // non-static variable 
        }

        static int m2()
        {   
            System.out.println("m2()");
            return 1000;
        }
        // Method With Parameters
        static void m3(int a,int b)
        {
            System.out.println("m3()");
            System.out.println(a+b);
        }
        

        public static void main(String[] args) {
            StaticMethod obj = new StaticMethod();
            StaticMethod.m1();
            obj.m1();
            
            obj.m2();
            
            obj.m3(99, 1);
        }
}
