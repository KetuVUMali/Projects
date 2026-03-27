
public class NonStaticVar3 {
     int a = 10;             // Non Static Var
    public static void main(String[] args) {
        // System.out.println(a);                  //Cant Direct Access
        NonStaticVar3 Obj = new NonStaticVar3();
        System.out.println(Obj.a);              // Obj Access
    }
}
