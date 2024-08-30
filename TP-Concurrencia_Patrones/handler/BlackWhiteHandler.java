package handler;

import objects.SheetPrint;

public class BlackWhiteHandler extends Handler {

    public BlackWhiteHandler(Handler succ) {
        super(succ);
    }

    public boolean handleRequest(SheetPrint hoja, int i, int j) {
        boolean exito = false;
        String pixel = hoja.getPixel(i, j);
        String colorNegro = "⚫️";
        String colorBlanco = "⚪";

        if (pixel.equals("B") || pixel.equals("W")) {
            // setea el pixel en blanco o negro
            if (pixel.equals("B")) {
                hoja.setPixel(colorNegro, i, j);
                System.out.println("Se imprimio el pixel de " + hoja.getName() + " en Negro");
            } else {
                hoja.setPixel(colorBlanco, i, j);
                System.out.println("Se imprimio el pizel de " + hoja.getName() + " en Blanco");
            }
            exito = true;

        } else {
            exito = this.getSuccesor().handleRequest(hoja, i, j);
        }

        return exito;
    }

}
