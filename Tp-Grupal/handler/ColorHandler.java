package handler;

import objects.SheetPrint;

public class ColorHandler extends Handler {

    public ColorHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint hoja, int i, int j) {
        boolean exito = false;
        String colorRojo = "🔴";

        if (hoja.getPixel(i,j).equals("C")) {
            // setea el pixel en holografico
            setPixel(colorRojo,i,j);
            System.out.println("Se imprimio el pixel de" + hoja.getName() + " en COLOR");
            exito = true;
        } else {
            exito = super.getSuccesor().handleRequest(hoja);
        }

        return exito;
    }

}
