

{const IVA = 1.21

 function producto (id, nombre, importe, stock)
 {

        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock
        this.importeConIva = function () {
            return this.importe * IVA
        }
        this.ajustarStock = function (unidadesVendidas) {
            if (typeof unidadesVendidas === "number" && this.stock >= unidadesVendidas && stock > 0) {
                return this.stock = this.stock - parseInt(unidadesVendidas)
            } else {
                console.error("error al descontar las unidades," + unidadesVendidas)
            }
        }

    
    }
}

 const producto1 = new producto (1,"Jhonnie Walkker Blue Label", 13000, 10)
 const producto2 = new producto (2,"Fernet Branca", 3000, 20)
 const producto3 = new producto (3,"Trumpeter Malvec", 2000, 8)

 
 console.log(producto2.ajustarStock(4))




















