import java.util.Arrays;

class ToString{
    public static void main(String[] args) {
       
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Array: " + Arrays.toString(numbers));
       
       ///////////////////////////////////////////////////////////////////
        int a=10;
        String s=Integer.toString(a);
        System.out.println(s);
        
        System.out.println( ( (Object) a).getClass().getSimpleName());
        System.out.println( ( (Object) s).getClass().getSimpleName());
        System.out.println(s.getClass().getName());
    }
}




