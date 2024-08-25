package handler;

import objects.SheetPrint;

public class BlackWhiteHandler extends Handler {

    public BlackWhiteHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint hoja, int i, int j) {
        boolean exito = false;
        String colorBlanco = "⚪️";

        if (hoja.getPixel(i,j).equals("B") ) {
            // setea el pixel en blanco y negro
            setPixel(colorBlanco,i,j);
            System.out.println("Se imprimio el pixel de" + hoja.getName() + " en ByN");
            exito = true;
        } else {
            exito = super.getSuccesor().handleRequest(hoja);
        }

        return exito;
    }

}
