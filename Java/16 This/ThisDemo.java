
public class ThisDemo 
{
    int x;

    // ThisDemo obj = new ThisDemo(10);
    // Create constructor for set obj value
    public ThisDemo(int x)
    {
        this.x = x;
    }

    public void show1()
    {
        int x=21;
        System.out.println(x);  // 21
        System.out.println(this.x);  // 10
    }
    public void Display1(int x)
    {
        this.x=x;
        System.out.println(x);  //  10
    }
    public void Display2(int x)
    {
        x = this.x;
        System.out.println(x);  // 10
    }

    public static void main(String[] args) {
        ThisDemo obj = new ThisDemo(10);
        obj.show1();
        obj.Display1(10);
        obj.Display2(10);
        
    }
    
}
