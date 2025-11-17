import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.Assertions;
import static org.assertj.core.api.Assertions.assertThat;

public class JUnitQuiz {

    @Test
    public void junitTest() {
        String name1 = "홍길동";
        String name2 = "홍길동";
        String name3 = "홍길은";

        // 1. 모든 변수가 null이 아닌지 확인
        assertThat(name1).isNotNull();

        // 2. name1과 name2가 같은지 확인
        // 3. name1과 name3이 다른지 확인

        int number1 = 15;
        int number2 = 0;
        int number3 = -5;

        // 4. number1은 양수인지 확인
        // 5. number2은 0인지 확인
        // 6. number3은 음수인지 확인
        // 7. number1은 number2보다 큰지 확인
        // 8. number3은 number2보다 작은지 확인
    }
}
