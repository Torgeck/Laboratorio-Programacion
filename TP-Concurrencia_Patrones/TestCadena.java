import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import handler.*;
import objects.Client;

public class TestCadena {

        public static void main(String[] args) {
                System.out.println("Inicio del programa");
                ScheduledExecutorService executor = new ScheduledThreadPoolExecutor(1);
                BlackWhiteHandler black = new BlackWhiteHandler(null);
                ColorHandler color = new ColorHandler(black);
                HoloHandler holo = new HoloHandler(color);

                executor.scheduleAtFixedRate(new Client("A", holo, 10, 10), 1, 15, TimeUnit.SECONDS);

                // executor.shutdown();
        }

}
