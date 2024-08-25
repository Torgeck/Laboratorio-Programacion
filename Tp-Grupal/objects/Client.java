package objects;

import handler.Handler;

public class Client implements Runnable {

    private String name;
    private SheetPrint sheet;
    private Handler primerHandler;

    public Client(String name, Handler handler, int sizeA, int sizeB) {
        this.name = name;
        this.primerHandler = handler;
        this.sheet = new SheetPrint("hoja1", sizeA, sizeB);
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void run() {
        System.out.println("El cliente " + this.getName() + " comienza a imprimir");
        int ancho = this.sheet.getSizeA(), altura = this.sheet.getSizeB();
        
        for (int i = 0; i < ancho; i++) {
            
            for (int j=0; j < largo; j++){
                System.out.println(this.name + " esta imprimiendo el pixel [" + i + "][ " + j +"]" );
                try{
                    //Thread.sleep(1000 * 5);
                    primerHandler.handleRequest(this.sheet, i, j);
                } catch (Exceptio e ){
                    System.out.println("Se rompio todo");
                }

            }
            
            System.out.println("El cliente " + this.name + " termino de imprimir");
            System.out.println(this.sheet.toString());
        }

        System.out.println("Se fue a su casa");

    }

}
