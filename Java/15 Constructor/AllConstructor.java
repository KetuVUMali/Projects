class AllConstructor
{
    String name;
    int age;

    public AllConstructor()
    {
        System.out.println("This is default constructor");
    }

    public AllConstructor( int age, String name)
    {
        System.out.println("This is parameterized constructor");
    }

    public static void main(String[] args) {
        AllConstructor obj1 = new AllConstructor();
        AllConstructor obj2 = new AllConstructor(20, "Rahul");
        AllConstructor obj3 = obj2;
    }
}