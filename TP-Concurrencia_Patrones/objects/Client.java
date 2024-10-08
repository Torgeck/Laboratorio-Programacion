package objects;

import java.time.LocalTime;
import handler.Handler;

public class Client implements Runnable {

    private String name;
    private SheetPrint sheet;
    private Handler primerHandler;
    private int contadorTareas;

    public Client(String name, Handler handler, int sizeA, int sizeB) {
        this.name = name;
        this.primerHandler = handler;
        this.sheet = new SheetPrint("hoja1", sizeA, sizeB);
        contadorTareas = 1;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void run() {
        System.out.printf("Hora de inicio de tarea %d: %tT\n", contadorTareas, LocalTime.now());
        int ancho = this.sheet.getSizeA(), altura = this.sheet.getSizeB();

        System.out.println("Un nuevo cliente ha llegado");
        System.out.printf("El cliente %s solicito una impresion\n",this.name);
        // inicializa los pixels aleatoriamente
        this.sheet.fillArray();
        // imprime estado inicial de la hoja
        System.out.println(this.sheet.toString());
        for (int i = 0; i < ancho; i++) {

            for (int j = 0; j < altura; j++) {
                System.out.printf("Se esta imprimiendo el pixel [%d][%d]\n",i,j);
                try {
                    Thread.sleep(500);
                    primerHandler.handleRequest(this.sheet, i, j);
                } catch (Exception e) {
                    System.out.println("Se rompio todo");
                }
            }
        }
        // imprime estado final de la hoja
        System.out.println("La impresion ha finalizado");
        System.out.println(this.sheet.toString());
        System.out.printf("El cliente %s se retiro de la imprenta\n",this.name);

        System.out.printf("Hora de finalizacion de tarea %d: %tT\n", contadorTareas, LocalTime.now());
        contadorTareas++;
    }

}
