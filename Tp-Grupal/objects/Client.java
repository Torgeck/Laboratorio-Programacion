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
        System.out.println("Hora de inicio de tarea "+contadorTareas+": "+ LocalTime.now());
        int ancho = this.sheet.getSizeA(), altura = this.sheet.getSizeB();

        System.out.println("El cliente " + this.getName() + " comienza a imprimir");
        //inicializa los pixels aleatoriamente
        this.sheet.fillArray();
        //imprime estado inicial de la hoja
        System.out.println(this.sheet.toString());
        for (int i = 0; i < ancho; i++) {
            
            for (int j=0; j < altura; j++){
                System.out.println(this.name + " esta imprimiendo el pixel [" + i + "][" + j +"]" );
                try{
                    //Thread.sleep(1000 * 5);
                    primerHandler.handleRequest(this.sheet, i, j);
                } catch (Exception e ){
                    System.out.println("Se rompio todo");
                }

            }
            
            System.out.println("El cliente " + this.name + " termino de imprimir");
        }
        //imprime estado final de la hoja
        System.out.println(this.sheet.toString());
    
        System.out.println("Hora de finalizacion de tarea "+contadorTareas+": "+ LocalTime.now());
        contadorTareas++;
    }

}
