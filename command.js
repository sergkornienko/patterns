class Command {
    execute() {
        throw new Error('Command dont have method execute')
    }
}

class CopyCommand extends Command {
    constructor(editor) {
        super();
        this.editor = editor;
    }
    execute() {
       this.editor.copy();
    }
}

class PasteCommand extends Command {
    constructor(editor) {
        super();
        this.editor = editor;
    }
    execute() {
       this.editor.paste();
    }
}

class Editor {
    constructor(text) {
        this.text = text;
    }
    copy() {
        console.log('Copy part of: ', this.text);
    }
    paste() {
        console.log('Paste part of: ', this.text);
    }
}

class Button {
    constructor(command) {
        this.command = command;
    }
    onClick() {
        this.command.execute();
    }
}

const firstEditor = new Editor('bla');
const copyCommand = new CopyCommand(firstEditor);
const secondEditor = new Editor('meh');
const pasteCommand = new PasteCommand(secondEditor);
const copyButton = new Button(copyCommand);
const pasteButton = new Button(pasteCommand);
copyButton.onClick();
pasteButton.onClick();