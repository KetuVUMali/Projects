// Polymorphism 

class AeroPlane 
    {
        void takeOff()    {    System.out.println("AeroPlane is taking off");   }
        void fly()        {    System.out.println("AeroPlane is flying");    }   
    }

class PassengerPlane extends AeroPlane 
    {
        void takeOff()    {    System.out.println("PassengerPlane is taking off");   }
        void fly()        {    System.out.println("PassengerPlane is flying");    }   
    }

class CargoPlane extends AeroPlane 
    {
        void takeOff()    {    System.out.println("CargoPlane is taking off");   }
        void fly()        {    System.out.println("CargoPlane is flying");    }   
    }

class D 
    {
        void display( AeroPlane obj2)
        {
            obj2.takeOff();
            obj2.fly();
        }
    }

class Demo
    {
        public static void main(String args[])
        {
            AeroPlane ap = new AeroPlane();
            PassengerPlane pp = new PassengerPlane();
            CargoPlane cp = new CargoPlane();

            D d = new D();
            d.display(ap);
            d.display(pp);
            d.display(cp);
        }
    }