class Record {
    save(item) {
        if(this.validate(item)) {
            this.beforeSaveHook();
            console.log('save to the DB', item);
            this.afterSaveHook();
        }
    }
    validate() {
        throw new Error('There is no realisation of validate');
    }
    beforeSaveHook() {}
    afterSaveHook() {}
}

class PdfRecord extends Record {
    constructor(file) {
        super();
        this.file = file;
    }
    validate() {
        // some logic of validation
        return Boolean(this.file);
    }
    afterSaveHook() {
        console.log(this.file, 'saved');
    }
}

const pdf = new PdfRecord('pdf file');
pdf.save(pdf.file);