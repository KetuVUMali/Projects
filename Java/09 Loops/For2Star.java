public class For2Star {
    public static void main(String[] args) {

        for(int r=1; r<=3; r++){
            for(int c=1; c<=3; c++){
                System.out.print(" * ");
            }
            System.out.println(" ");
        }System.out.println("");

        for(int r=1; r<=3; r++){
            for(int c=1; c<=3; c++){
                System.out.print(" "+c+" ");
            }
            System.out.println("");
        }System.out.println("");

        int count=0;
        for(int r=1; r<=3; r++){
            for(int c=1; c<=3; c++){
                System.out.print(" "+count+" ");
                count++;
            }
            System.out.println("");
        }
    }
}
