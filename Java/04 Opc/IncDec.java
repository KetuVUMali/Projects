
public class IncDec {
    public static void main(String[] args) {
        int a=10;
        a++;                            //  a=a+1         // a+=1
        System.out.println(a);  // 10
        a--;                            //  a=a-1         // a-=1
        System.out.println(a);  //11


        int x=10;
        x++;
        System.out.println(x);  // 11  
        ++x;
        System.out.println(x);  // 12
        int y=x++;
        System.out.println(y);  // 12
        System.out.println(x);  // 13
        int z=++x;
        System.out.println(z);  // 14
        System.out.println(x);  // 14
        
        int p = 1;
        int q = ++p + ++p + --p ;   // 2  +  3  +  2 => 7       // 
        System.err.println(p);  // 7
        System.out.println(q);  // 2



        int k=10;
        k--;
        System.out.println(k);  // 9
        --k;
        System.out.println(k);  // 8
        int l=k--;
        System.out.println(l);  // 8
        System.out.println(k);  // 7
        int m=--k;
        System.out.println(m);  // 6
        System.out.println(k);  // 6
        
        int n = 1;
        int o = --n + --n + ++n ;   // 0  +  -1  +  0 => -1       // 
        System.err.println(o);  // 0
        System.out.println(n);  // -1


        int c= 1;
        //       
        int d = c++ + ++c + --c + c-- - ++c - c++ ;  //   2  +  3  +  2  +  1  -  2  - 3  => 8 - 5 => 3
        System.out.println(c);  // 3
        System.out.println(d);  // 4
    }
}
