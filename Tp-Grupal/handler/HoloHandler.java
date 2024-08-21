package handler;

import objects.SheetPrint;

public class HoloHandler extends Handler {

    public HoloHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint impresion) {
        boolean exito = false;

        if (impresion.getType() == "holo") {
            // Imprime en color
            System.out.println("Se imprimio " + impresion.getName() + " en HOLOGRAFICO");
            exito = true;
        } else {
            exito = super.getSuccesor().handleRequest(impresion);
        }

        return exito;
    }

}
