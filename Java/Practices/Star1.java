class Star1
    {
        public static void main(String[] args) {
            int n=5;
            for(int i=0; i<n; i++)
                {
                    for(int j=0; j<n; j++)
                        {
                            if( i==0 || j==0 || j==4 || i==4)
                            //if( i==0 || j==0 || j==n-1 || i==n-1)
                                {
                                    System.out.print(" * ");
                                    //System.out.print("*");
                                }
                            else    
                                {
                                    System.out.print("   ");
                                    //System.out.print(" ");
                                }
                        }
                    System.out.println(" ");
                }
        }
    }

    //     j 0 1 2 3 4
    //  i
    //  0    * * * * * 
    //  1    *       * 
    //  2    *       * 
    //  3    *       *
    //  4    * * * * *