import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.Executors;

import handler.*;
import objects.Client;

public class TestCadena {

        public static void main(String[] args) {
                System.out.println("Inicio del programa");
                ScheduledExecutorService exc = Executors.newSingleThreadScheduledExecutor();
                WhiteHandler white = new WhiteHandler(null);
                BlackHandler black = new BlackHandler(white);
                ColorHandler color = new ColorHandler(black);
                HoloHandler holo = new HoloHandler(color);

                exc.scheduleAtFixedRate(new Client("Alberto", holo, 3, 3), 3, 15, TimeUnit.SECONDS);

                //exc.shutdown();
        }

}
