package handler;

import objects.SheetPrint;

public class BlackWhiteHandler extends Handler {

    public BlackWhiteHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint impresion) {
        boolean exito = false;

        if (impresion.getType() == "blackWhite") {
            // Imprime en color
            System.out.println("Se imprimio " + impresion.getName() + " en BLANCO Y NEGRO");
            exito = true;
        } else {
            exito = super.getSuccesor().handleRequest(impresion);
        }

        return exito;
    }

}
