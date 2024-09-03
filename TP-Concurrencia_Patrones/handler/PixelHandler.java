package handler;

import objects.SheetPrint;

public class PixelHandler extends Handler{
    public String tipo;
    public String emoji;
    public String nombreTipo;

    public PixelHandler(Handler succ, String unTipo, String unEmoji, String unNombreTipo) {
        super(succ);
        this.tipo = unTipo;
        this.emoji = unEmoji;
        this.nombreTipo = unNombreTipo;
    }

    public boolean handleRequest(SheetPrint hoja, int i, int j) {
        boolean exito = false;

        if (hoja.getPixel(i, j).equals(this.tipo)) {
            // setea el pixel en el color que corresponda segun el tipo.
            hoja.setPixel(emoji, i, j);
            System.out.printf("Se imprimio el pixel de %s en %s\n",hoja.getName(),nombreTipo);
            exito = true;
        } else {
            exito = this.getSuccesor().handleRequest(hoja, i, j);
        }

        return exito;
    }
}
