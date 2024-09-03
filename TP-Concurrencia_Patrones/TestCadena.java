import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import handler.*;
import objects.Client;

public class TestCadena {

        public static void main(String[] args) {
                System.out.println("Inicio del programa");
                ScheduledExecutorService executor = new ScheduledThreadPoolExecutor(1);
                WhiteHandler white = new WhiteHandler(null);
                BlackHandler black = new BlackHandler(white);
                ColorHandler color = new ColorHandler(black);
                HoloHandler holo = new HoloHandler(color);

                executor.scheduleAtFixedRate(new Client("Alberto", holo, 3, 3), 3, 15, TimeUnit.SECONDS);

                //exc.shutdown();
        }

}
