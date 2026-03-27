class LocalVar4{

    static int a = 10;
    int b = 20;

    void m1(){
        int c = 30;                 // Local Var
        System.out.println(c);
    }
    public static void main(String[] args) {
        LocalVar4 obj = new LocalVar4();
        obj.m1();                               // obj through call Method
        
        // System.out.println(c);  cannot find symbol


    }
}