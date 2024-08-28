package handler;

import objects.SheetPrint;

public abstract class Handler {

    private Handler succesor;

    public Handler() {
        succesor = null;
    }

    public Handler(Handler succ) {
        succesor = succ;
    }

    public Handler getSuccesor() {
        return succesor;
    }

    public boolean setSuccessor(Handler succ) {
        succesor = succ;
        return true;
    }

    public abstract boolean handleRequest(SheetPrint impresion,int i,int j);
}