import java.util.Arrays;
import java.util.List;

public class AsList {
    public static void main(String[] args) {
        String[] words = {"Hello", "Java", "World"};
        List<String> list = Arrays.asList(words);
        System.out.println("List: " + list);
    }
}
