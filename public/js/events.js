class events {
    constructor(title, fk_type, dato_tid, varighed, fk_sted, fk_sal, pris, i) {
        this.title = title;
        this.fk_type = fk_type;
        this.dato_tid = dato_tid;
        this.varighed = varighed;
        this.fk_sted = fk_sted;
        this.fk_sal = fk_sal;
        this.pris = pris;
        this.i = i;
        this.showEvent();
    }
    showEvent() {
        document.querySelectorAll("h4")[i].innerHTML = this.title;

    }
}