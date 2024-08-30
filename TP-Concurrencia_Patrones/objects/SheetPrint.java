package objects;

import java.util.Random;

public class SheetPrint {
    private String name;
    private String pixels[][];
    private int sizeA;
    private int sizeB;

    public SheetPrint(String name, int sizeA, int sizeB) {
        this.name = name;
        this.sizeA = sizeA;
        this.sizeB = sizeB;
        this.pixels = new String[sizeA][sizeB];
    }

    public int getSizeA() {
        return this.sizeA;
    }

    public int getSizeB() {
        return this.sizeB;
    }

    public String[][] getPixels() {
        return this.pixels;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String setRandomPixel() {
        Random random = new Random();
        String tipo;

        switch (random.nextInt(4)) {
            case 0:
                tipo = "H";
                break;
            case 1:
                tipo = "C";
                break;
            case 2:
                tipo = "B";
                break;
            case 3:
                tipo = "W";
                break;
            default:
                tipo = "R";
                break;
        }

        return tipo;
    }

    public void fillArray() {

        for (int i = 0; i < sizeA; i++) {

            for (int j = 0; j < sizeB; j++) {
                this.pixels[i][j] = setRandomPixel();
            }
        }
    }

    public String toString() {
        StringBuffer buffer = new StringBuffer();

        for (int i = 0; i < sizeA; i++) {
            for (int j = 0; j < sizeB; j++) {
                buffer.append(this.pixels[i][j]);

                if (j + 1 != sizeB) {
                    buffer.append(" - ");
                }
            }
            buffer.append("\n");
        }
        return buffer.toString();
    }

    public String getPixel(int row, int col) {
        return this.pixels[row][col];
    }

    public boolean setPixel(String content, int row, int col) {
        this.pixels[row][col] = content;
        return true;
    }

}
