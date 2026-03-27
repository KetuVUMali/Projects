

public class StringArg2 {
    public static void main(String... ketan) {
        System.out.println(ketan[0]+" "+ketan[1]);
        System.out.println(ketan[0]+ketan[1]);  // String Arrays then values is string
        //conversion of String-int String-double
        int a = Integer.parseInt(ketan[0]);
        double d = Double.parseDouble(ketan[1]);
        System.out.println(a+d);
    }
    
}
//javac StringArgs2.java
// java StringArg2 100 200.99
// 100 200.99
// 100200.99
// 300.99