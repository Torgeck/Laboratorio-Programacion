package objects;

import java.util.Random;

public class SheetPrint {

    private String type;
    private String name;

    public SheetPrint(String name) {
        this.name = name;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRandomType() {
        Random random = new Random();
        String tipo;

        switch (random.nextInt(3)) {
            case 0:
                tipo = "holo";
                break;
            case 1:
                tipo = "color";
                break;
            case 2:
                tipo = "blackWhite";
                break;
            default:
                tipo = "radioactivo";
                break;
        }

        this.setType(tipo);
    }

}
