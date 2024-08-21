package handler;

import objects.SheetPrint;

public class ColorHandler extends Handler {

    public ColorHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint impresion) {
        boolean exito = false;

        if (impresion.getType() == "color") {
            // Imprime en color
            System.out.println("Se imprimio " + impresion.getName() + " en COLOR");
            exito = true;
        } else {
            exito = super.getSuccesor().handleRequest(impresion);
        }

        return exito;
    }

}
