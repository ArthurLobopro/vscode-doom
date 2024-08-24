import * as vscode from "vscode";
import { PanelBuilder } from "../PanelBuilder";
import { Command } from "./Command";

export class OpenDooM extends Command {
    name = "vscode-doom.open-doom";

    constructor(protected context: vscode.ExtensionContext) {
        super();
    }

    async exec() {
        const panel = await new PanelBuilder(this.context).build();
    }
}