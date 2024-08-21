package objects;

import handler.Handler;

public class Client implements Runnable {

    private String name;
    private SheetPrint[] sheetList;
    private int size;
    // No se que tan bien este esto
    private Handler primerHandler;

    public Client(String name, int size, Handler handler) {
        this.name = name;
        this.size = size;
        this.primerHandler = handler;
        createSheetList();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public SheetPrint[] getSheetList() {
        return this.sheetList;
    }

    public void setSheetList(SheetPrint[] sheetList) {
        this.sheetList = sheetList;
    }

    public void createSheetList() {
        SheetPrint[] list = new SheetPrint[this.size];

        for (int i = 0; i < this.size; i++) {
            list[i] = new SheetPrint("Hoja" + i);
            list[i].setRandomType();
        }

        this.setSheetList(list);
    }

    public void run() {
        System.out.println("El cliente " + this.getName() + " comienza a imprimir");

        for (int i = 0; i < this.size; i++) {
            System.out.println(this.name + " esta imprimiendo");
            try {
                Thread.sleep(1000 * 5);
                primerHandler.handleRequest(sheetList[i]);
            } catch (Exception e) {
                System.out.println("Se rompio todo");
            }
            System.out.println("El cliente " + this.name + " termino de imprimir " + i);
        }

        System.out.println("Se fue a su casa");

    }

}
