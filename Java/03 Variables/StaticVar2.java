class StaticVar2{

    static int a=10;           // Static Var
    char b ='A';        // non-static Var
    
    public static void main(String[] args) {
        StaticVar2 objDemo = new StaticVar2();
        System.out.println(a);                  // Direct Access
        System.out.println(objDemo.a);          // Obj Access
        System.out.println(StaticVar2.a);       // Class Access
       // System.out.println(StaticVar2.b);   non-static variable a cannot be referenced from a static context
    }
}