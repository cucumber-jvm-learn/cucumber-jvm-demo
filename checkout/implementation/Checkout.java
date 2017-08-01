package implementation;

public class Checkout{
    private int total;
    
    {
        total = 0;
    }
    public void add(int count, int price){
        total += count * price;
    }

    public int total(){
        return total;
    }
}
