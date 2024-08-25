package handler;

import objects.SheetPrint;

public class HoloHandler extends Handler {

    public HoloHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint hoja, int i, int j) {
        boolean exito = false;
        String banderaPirata = "🏴‍☠️";

        if (hoja.getPixel(i,j).equals("H")) {
            // setea el pixel en holografico
            setPixel(banderaPirata,i,j);
            System.out.println("Se imprimio el pixel de" + hoja.getName() + " en HOLOGRAFICO");
            exito = true;
        } else {
            exito = super.getSuccesor().handleRequest(hoja);
        }

        return exito;
    }

}
